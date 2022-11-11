import React, { useEffect, useState } from "react";
import { SimpleTableProps } from "../dist/types";
import { TableRoot, Tbody, Td, Th, Thead, Tr } from "./table";
import { breakpoints, resolveCellValue } from "./utils";

export const DefaultSimpleTable = <T,>({
  data,
  cols,
  dataKeyFn,
  headAttrs: _headAttrs,
  bodyAttrs: _bodyAttrs,
  rowAttrs: _rowAttrs,
  ...rest
}: SimpleTableProps<T>): JSX.Element => {
  const headAttrs = _headAttrs || {};
  const bodyAttrs = _bodyAttrs || {};
  const rowAttrs = _rowAttrs || {};
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <TableRoot {...rest}>
      <Thead {...headAttrs}>
        <Tr {...rowAttrs}>
          {cols
            .filter(col => {
              const visibility = col[3]?.visibility || "xs";
              const breakpoint = breakpoints[visibility] || 0;
              return windowWidth > breakpoint;
            })
            .map(col => {
              const [id, label, , opts] = col;
              const attrs = opts?.headerAttrs || {};

              return (
                <Th key={id} {...attrs}>
                  {label}
                </Th>
              );
            })}
        </Tr>
      </Thead>

      <Tbody {...bodyAttrs}>
        {data.map((item, itemIdx) => {
          const keyFn = dataKeyFn || (() => itemIdx);

          return (
            <Tr key={keyFn(item)} {...rowAttrs}>
              {cols
                .filter(col => {
                  const visibility = col[3]?.visibility || "xs";
                  const breakpoint = breakpoints[visibility] || 0;
                  return windowWidth > breakpoint;
                })
                .map((col, colIdx) => {
                  const resolver = col[2];
                  const attrs = col[3]?.bodyAttrs || {};
                  const cellValue = resolveCellValue(item, resolver, itemIdx);

                  return (
                    <Td key={colIdx} {...attrs}>
                      {cellValue}
                    </Td>
                  );
                })}
            </Tr>
          );
        })}
      </Tbody>
    </TableRoot>
  );
};
