import { FC, HTMLAttributes } from "react";
import {
  CellResolver,
  ObjectTableProps,
  SimpleTableProps,
  TableColumn,
  TransformedTableColumn
} from "./types";

export declare const LinearProgressRoot: FC<HTMLAttributes<HTMLDivElement>>;

export declare const LinearProgressBar: FC<HTMLAttributes<HTMLDivElement>>;

export declare type SimpleTable<T> = FC<SimpleTableProps<T>>;

export declare type ObjectTable<T> = FC<ObjectTableProps<T>>;

export declare const Table: FC<HTMLAttributes<HTMLTableElement>>;

export declare const Thead: FC<HTMLAttributes<HTMLTableSectionElement>>;

export declare const Tbody: FC<HTMLAttributes<HTMLTableSectionElement>>;

export declare const Tr: FC<HTMLAttributes<HTMLTableRowElement>>;

export declare const Th: FC<HTMLAttributes<HTMLTableHeaderCellElement>>;

export declare const Td: FC<HTMLAttributes<HTMLTableCellElement>>;

export declare const breakpoints: {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export declare const resolveCellValue: (
  item: any,
  resolver: CellResolver,
  itemIndex: number
) => any;

export declare const transformColumns: (
  cols: Array<TableColumn>,
  windowWidth: number
) => Array<TransformedTableColumn>;
