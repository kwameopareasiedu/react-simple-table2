import { CellResolver, CellResolverFunction } from "../dist/types";

const EMPTY_STRING = "";

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
      const propertyKeys = resolver.split(".");

      for (const propertyKey of propertyKeys) {
        if (!iterator[propertyKey]) return EMPTY_STRING;
        iterator = iterator[propertyKey];
      }

      return iterator || EMPTY_STRING;
    }
  } else if (typeof resolver === "function") {
    return (resolver as CellResolverFunction)(item, itemIndex);
  } else return null;
};
