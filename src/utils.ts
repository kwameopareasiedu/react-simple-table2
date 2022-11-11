import {
  CellResolver,
  CellResolverFunction,
  SortData,
  TableColumn,
  TransformedTableColumn
} from "../dist/types";

const EMPTY_STRING = "";

/** Mapping of breakpoint values to min window widths */
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

/**
 * Obtains the property of an item using a `resolver.
 * A `resolver` can be any of the following:
 *
 * 1. A property name string
 * 2. A nested property name string (using dot notation)
 * 3. A function which receives the item and its index and returns a value to display
 *
 * Examples:
 * 1. A resolver value of `"name"` is equivalent to `item["name"]`
 * 2. A resolver value of `"name.first"` is equivalent to `item.name.first`
 * 3. A resolver value of `(item, index) => <strong>{item.customField}</strong>`
 * outputs a `<strong>` JSX tag with content of `item.customField`
 */
export const resolveCellValue = (
  item: any,
  resolver: CellResolver,
  itemIndex: number
): any => {
  if (!item) {
    return EMPTY_STRING;
  } else if (typeof resolver === "string") {
    if (resolver.indexOf(".") === -1) {
      return item[resolver] || EMPTY_STRING;
    } else {
      let iterator = item;
      const propertyPath = resolver.split(".");

      for (const segment of propertyPath) {
        if (!iterator[segment]) return EMPTY_STRING;
        iterator = iterator[segment];
      }

      return iterator || EMPTY_STRING;
    }
  } else if (typeof resolver === "function") {
    return (resolver as CellResolverFunction)(item, itemIndex);
  } else return null;
};

/**
 * Transforms the array of table columns into an array
 * of computed values that are required for rendering
 */
export const transformColumns = (
  cols: Array<TableColumn>,
  windowWidth: number
): Array<TransformedTableColumn> => {
  return cols
    .filter(col => {
      const visibility = col[3]?.visibility || "xs";
      const breakpoint = breakpoints[visibility] || 0;
      return windowWidth > breakpoint;
    })
    .map(col => {
      const [id, label, resolver, opts] = col;
      const visibility = opts?.visibility || "xs";
      const columnVisible = windowWidth > (breakpoints[visibility] || 0);
      const headerVisibility = opts?.headerVisibility || "xs";
      const headerVisible = windowWidth > (breakpoints[headerVisibility] || 0);

      return {
        id,
        label,
        resolver,
        sortable: opts?.sortable !== undefined ? opts?.sortable : true,
        visible: columnVisible,
        headerVisible: headerVisible,
        headerAttrs: opts?.headerAttrs,
        bodyAttrs: opts?.bodyAttrs
      };
    });
};

export const cycleSortData = (data: SortData, id: string): SortData => {
  if (data.id !== id) return { id, dir: "asc" };
  if (data.dir === "asc") return { ...data, dir: "desc" };
  else if (data.dir === "desc") return { id: data.id };
  else return { id: data.id, dir: "asc" };
};
