import React, { useEffect, useMemo, useState } from "react";
import { SimpleTableProps } from "../dist/types";
import { Table, Tbody, Td, Th, Thead, ThFlex, Tr } from "./table";
import {
  breakpoints,
  cycleSortData,
  resolveCellValue,
  transformColumns
} from "./utils";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted
} from "react-icons/ti";
import styled from "styled-components";
import { LinearProgress } from "./linear-progress";

const SimpleTableRoot = styled(Table)``;

export const SimpleTable = <T,>({
  data,
  cols,
  dataKeyFn,
  headAttrs,
  bodyAttrs,
  mobileCards,
  loading,
  sort,
  breakpoint,
  onSort,
  rowAttrsBuilder,
  thBuilder,
  tdBuilder,
  ...rest
}: SimpleTableProps<T>): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpointWidth = useMemo(() => {
    if (!breakpoint) return breakpoints["md"];
    else if (typeof breakpoint === "string") {
      return breakpoints[breakpoint] || 0;
    } else return breakpoint;
  }, [breakpoint]);

  const buildTh = (value: any) => {
    if (typeof value === "string") {
      return thBuilder?.(value) || value;
    } else return value;
  };

  const buildTd = (value: any) => {
    if (typeof value === "string") {
      return tdBuilder?.(value) || value;
    } else return value;
  };

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
    <SimpleTableRoot {...rest}>
      {(windowWidth > breakpointWidth || !mobileCards) && (
        <Thead {...headAttrs}>
          <Tr>
            {transformColumns(cols, windowWidth).map(
              ({ id, label, headerAttrs, headerVisible, sortable }) => {
                if (!headerVisible) {
                  return <Th key={id} {...headerAttrs} />;
                } else if (sort && sortable) {
                  return (
                    <Th key={id} style={{ padding: 0 }} {...headerAttrs}>
                      <ThFlex onClick={() => onSort(cycleSortData(sort, id))}>
                        {buildTh(label)}
                        {sort.id === id && sort.dir === "asc" ? (
                          <TiArrowSortedUp />
                        ) : sort.id === id && sort.dir === "desc" ? (
                          <TiArrowSortedDown />
                        ) : (
                          <TiArrowUnsorted color="#e3e3e3" />
                        )}
                      </ThFlex>
                    </Th>
                  );
                } else {
                  return (
                    <Th key={id} {...headerAttrs}>
                      {buildTh(label)}
                    </Th>
                  );
                }
              }
            )}
          </Tr>
        </Thead>
      )}

      <Tbody {...bodyAttrs}>
        {loading && (
          <Tr style={{ border: "none" }}>
            <Td colSpan={cols.length} style={{ padding: 0 }}>
              <LinearProgress />
            </Td>
          </Tr>
        )}

        {data.map((item, itemIdx) => {
          const keyFn = dataKeyFn || (() => itemIdx);
          const rowAttrs = rowAttrsBuilder?.(item, itemIdx);

          // On mobile views, use a stacked two-column table
          if (windowWidth <= breakpointWidth && mobileCards) {
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
                              <Td>{buildTd(label)}</Td>
                              <Td>{buildTd(cellValue)}</Td>
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
                      {buildTd(cellValue)}
                    </Td>
                  );
                }
              )}
            </Tr>
          );
        })}
      </Tbody>
    </SimpleTableRoot>
  );
};
