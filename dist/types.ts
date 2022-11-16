import React, { HTMLAttributes, ReactNode } from "react";

export type CellResolverFunction<T = any> = (
  item: T,
  itemIndex?: number
) => ReactNode;

export type CellResolver<T = any> = string | CellResolverFunction<T>;

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | number;

export type TableColumn<T = any> = [
  string, // Column id
  ReactNode, // Column label
  CellResolver<T>, // Column value resolver
  {
    sortable?: boolean;
    thAttrs?: HTMLAttributes<HTMLTableHeaderCellElement>;
    tdAttrs?: HTMLAttributes<HTMLTableCellElement>;
    visibility?: Breakpoint;
    headerVisibility?: Breakpoint;
  }? // Column Options
];

export interface TransformedTableColumn {
  id: string;
  label: ReactNode;
  resolver: CellResolver;
  sortable?: boolean;
  visible: boolean;
  thVisible: boolean;
  thAttrs?: HTMLAttributes<HTMLTableHeaderCellElement>;
  tdAttrs?: HTMLAttributes<HTMLTableCellElement>;
}

export interface SortData {
  id?: string;
  dir?: "asc" | "desc";
}

export interface SimpleTableProps<T> extends HTMLAttributes<HTMLTableElement> {
  cols: Array<TableColumn<T>>;
  data: Array<T>;
  dataKeyFn?: (item: T, index: number) => string;
  theadAttrs?: HTMLAttributes<HTMLTableSectionElement>;
  tbodyAttrs?: HTMLAttributes<HTMLTableSectionElement>;
  trAttrsBuilder?: (item: T, i: number) => HTMLAttributes<HTMLTableRowElement>;
  thBuilder?: (val: string) => ReactNode;
  tdBuilder?: (val: string) => ReactNode;
  sort?: SortData;
  onSort?: (data: SortData) => void;
  loading?: boolean;
  useCards?: boolean;
  breakpoint?: Breakpoint;
}

export interface ObjectTableProps<T> extends HTMLAttributes<HTMLTableElement> {
  data: T;
  props: Array<[ReactNode, CellResolver<T>]>;
  tbodyAttrs?: HTMLAttributes<HTMLTableSectionElement>;
  trAttrs?: HTMLAttributes<HTMLTableRowElement>;
  tdAttrs?: HTMLAttributes<HTMLTableCellElement>;
  split?: number;
}
