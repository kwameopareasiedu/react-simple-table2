import { HTMLAttributes } from "react";

export type CellResolverFunction<T = any> = (
  item: T,
  itemIndex?: number
) => JSX.Element | string;

export type CellResolver<T = any> = string | CellResolverFunction<T>;

export type TableColumn<T = any> = [
  string, // Column id
  JSX.Element | string, // Column label
  CellResolver<T>, // Column value resolver
  {
    sortable?: boolean;
    attrs?: HTMLAttributes<HTMLTableHeaderCellElement>;
  }? // Column Options
];

export interface TableProps<T> extends HTMLAttributes<HTMLTableElement> {
  data: Array<T>;
  dataKeyFn?: (item: T) => string;
  cols: Array<TableColumn<T>>;
}
