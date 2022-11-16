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
    /** @deprecated Replace with thProps in next major version */
    headerAttrs?: HTMLAttributes<HTMLTableHeaderCellElement>;
    /** @deprecated Replace with tdProps in next major version */
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
  /** @deprecated Replace with theadProps in next major version */
  headAttrs?: HTMLAttributes<HTMLTableSectionElement>;
  /** @deprecated Replace with tbodyProps in next major version */
  bodyAttrs?: HTMLAttributes<HTMLTableSectionElement>;
  loading?: boolean;
  mobileCards?: boolean;
  breakpoint?: Breakpoint;
  sort?: SortData;
  onSort?: (data: SortData) => void;
  /** @deprecated Replace with trPropsBuilder in next major version */
  rowAttrsBuilder?: (
    item: T,
    index: number
  ) => HTMLAttributes<HTMLTableRowElement>;
  thBuilder?: (val: string) => ReactNode;
  tdBuilder?: (val: string) => ReactNode;
}

export interface ObjectTableProps<T> extends HTMLAttributes<HTMLTableElement> {
  data: T;
  props: Array<[ReactNode, CellResolver<T>]>;
  bodyAttrs?: HTMLAttributes<HTMLTableSectionElement>;
  rowAttrs?: HTMLAttributes<HTMLTableRowElement>;
  tdAttrs?: HTMLAttributes<HTMLTableCellElement>;
  split?: number;
}
