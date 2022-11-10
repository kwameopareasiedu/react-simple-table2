import React from "react";
import { TableProps } from "../dist/types";
import { TableRoot, Tbody, Td, Th, Thead, Tr } from "./table";
import { resolveCellValue } from "./utils";

export const DefaultTable = <T,>({
  data,
  cols,
  dataKeyFn,
  ...rest
}: TableProps<T>): JSX.Element => {
  return (
    <TableRoot {...rest}>
      <Thead>
        <Tr>
          {cols.map(col => {
            const [id, label, , opts] = col;
            const attrs = opts?.attrs || {};

            return (
              <Th key={id} {...attrs}>
                {label}
              </Th>
            );
          })}
        </Tr>
      </Thead>

      <Tbody>
        {data.map((item, itemIdx) => {
          const keyFn = dataKeyFn || (() => itemIdx);

          return (
            <Tr key={keyFn(item)}>
              {cols.map((col, colIdx) => {
                const resolver = col[2];
                const cellValue = resolveCellValue(item, resolver, itemIdx);

                return <Td key={colIdx}>{cellValue}</Td>;
              })}
            </Tr>
          );
        })}
      </Tbody>
    </TableRoot>
  );
};
