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
    headerAttrs?: HTMLAttributes<HTMLTableHeaderCellElement>;
    bodyAttrs?: HTMLAttributes<HTMLTableCellElement>;
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
  headerVisible: boolean;
  headerAttrs?: HTMLAttributes<HTMLTableHeaderCellElement>;
  bodyAttrs?: HTMLAttributes<HTMLTableCellElement>;
}

export interface SortData {
  id?: string;
  dir?: "asc" | "desc";
}

export interface SimpleTableProps<T> extends HTMLAttributes<HTMLTableElement> {
  cols: Array<TableColumn<T>>;
  data: Array<T>;
  dataKeyFn?: (item: T, index: number) => string;
  headAttrs?: HTMLAttributes<HTMLTableSectionElement>;
  bodyAttrs?: HTMLAttributes<HTMLTableSectionElement>;
  rowAttrsBuilder?: (
    item: T,
    index: number
  ) => HTMLAttributes<HTMLTableRowElement>;
  mobileCards?: boolean;
  sort?: SortData;
  onSort?: (data: SortData) => void;
  loading?: boolean;
  breakpoint?: Breakpoint;
}

export interface ObjectTableProps<T> extends HTMLAttributes<HTMLTableElement> {
  data: T;
  props: Array<[ReactNode, CellResolver<T>]>;
  bodyAttrs?: HTMLAttributes<HTMLTableSectionElement>;
  rowAttrs?: HTMLAttributes<HTMLTableRowElement>;
  tdAttrs?: HTMLAttributes<HTMLTableCellElement>;
  split?: number;
}
