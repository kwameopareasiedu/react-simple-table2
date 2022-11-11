import React, { useEffect, useState } from "react";
import { SimpleTableProps } from "../dist/types";
import { Table, Tbody, Td, Th, Thead, Tr } from "./table";
import { breakpoints, resolveCellValue, transformColumns } from "./utils";
import styled from "styled-components";

const DefaultSimpleTableRoot = styled(Table)`
  border-radius: 8px;
  box-shadow: 2px 2px 10px #e3e3e3;
`;

export const DefaultSimpleTable = <T,>({
  data,
  cols,
  dataKeyFn,
  headAttrs: _headAttrs,
  bodyAttrs: _bodyAttrs,
  rowAttrs: _rowAttrs,
  useCardsOnMobile,
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
    <DefaultSimpleTableRoot {...rest}>
      {(windowWidth > breakpoints["md"] || !useCardsOnMobile) && (
        <Thead {...headAttrs}>
          <Tr {...rowAttrs}>
            {transformColumns(cols, windowWidth).map(
              ({ id, label, headerAttrs, headerVisible }) => {
                return (
                  <Th key={id} {...headerAttrs}>
                    {headerVisible ? label : null}
                  </Th>
                );
              }
            )}
          </Tr>
        </Thead>
      )}

      <Tbody {...bodyAttrs}>
        {data.map((item, itemIdx) => {
          const keyFn = dataKeyFn || (() => itemIdx);

          // On mobile views, use a stacked two-column table
          if (windowWidth <= breakpoints["md"] && useCardsOnMobile) {
            return (
              <Tr key={keyFn(item)} {...rowAttrs}>
                <Td
                  colSpan={cols.length}
                  style={{ padding: 0, borderBottom: "4px solid #f2f2f2" }}>
                  <Table>
                    <Tbody>
                      {transformColumns(cols, windowWidth).map(
                        ({ label, resolver, bodyAttrs }, colIdx) => {
                          const cellValue = resolveCellValue(
                            item,
                            resolver,
                            itemIdx
                          );

                          return (
                            <Tr key={colIdx} {...bodyAttrs}>
                              <Td>{label}</Td>
                              <Td>{cellValue}</Td>
                            </Tr>
                          );
                        }
                      )}
                    </Tbody>
                  </Table>
                </Td>
              </Tr>
            );
          }

          return (
            <Tr key={keyFn(item)} {...rowAttrs}>
              {transformColumns(cols, windowWidth).map(
                ({ resolver, bodyAttrs }, colIdx) => {
                  const cellValue = resolveCellValue(item, resolver, itemIdx);

                  return (
                    <Td key={colIdx} {...bodyAttrs}>
                      {cellValue}
                    </Td>
                  );
                }
              )}
            </Tr>
          );
        })}
      </Tbody>
    </DefaultSimpleTableRoot>
  );
};
