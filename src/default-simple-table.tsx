import React, { useEffect, useState } from "react";
import { SimpleTableProps } from "../dist/types";
import { TableRoot, Tbody, Td, Th, Thead, Tr } from "./table";
import { resolveCellValue, transformColumns } from "./utils";
import styled from "styled-components";

const DefaultSimpleTableRoot = styled(TableRoot)``;

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

      <Tbody {...bodyAttrs}>
        {data.map((item, itemIdx) => {
          const keyFn = dataKeyFn || (() => itemIdx);

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
