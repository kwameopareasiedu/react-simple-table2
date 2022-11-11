import React, { useEffect, useState } from "react";
import { SimpleTableProps } from "../dist/types";
import { Table, Tbody, Td, Th, Thead, ThFlex, Tr } from "./table";
import {
  breakpoints,
  cycleSortData,
  resolveCellValue,
  transformColumns
} from "./utils";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import styled from "styled-components";

const DefaultSimpleTableRoot = styled(Table)`
  border-radius: 8px;
  box-shadow: 2px 2px 10px #e3e3e3;
`;

export const DefaultSimpleTable = <T,>({
  data,
  cols,
  dataKeyFn,
  headAttrs,
  bodyAttrs,
  rowAttrs: rowAttrsBuilder,
  useCardsOnMobile,
  sort,
  onSort,
  ...rest
}: SimpleTableProps<T>): JSX.Element => {
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
          <Tr>
            {transformColumns(cols, windowWidth).map(
              ({ id, label, headerAttrs, headerVisible }) => {
                if (!headerVisible) {
                  return null;
                } else if (sort) {
                  return (
                    <Th key={id} style={{ padding: 0 }} {...headerAttrs}>
                      <ThFlex onClick={() => onSort(cycleSortData(sort, id))}>
                        {label}
                        {sort.id === id && sort.dir === "asc" && (
                          <TiArrowSortedUp />
                        )}
                        {sort.id === id && sort.dir === "desc" && (
                          <TiArrowSortedDown />
                        )}
                      </ThFlex>
                    </Th>
                  );
                } else {
                  return (
                    <Th key={id} {...headerAttrs}>
                      {label}
                    </Th>
                  );
                }
              }
            )}
          </Tr>
        </Thead>
      )}

      <Tbody {...bodyAttrs}>
        {data.map((item, itemIdx) => {
          const keyFn = dataKeyFn || (() => itemIdx);
          const rowAttrs = rowAttrsBuilder?.(item, itemIdx);

          // On mobile views, use a stacked two-column table
          if (windowWidth <= breakpoints["md"] && useCardsOnMobile) {
            return (
              <Tr key={keyFn(item, itemIdx)} {...rowAttrs}>
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
            <Tr key={keyFn(item, itemIdx)} {...rowAttrs}>
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
