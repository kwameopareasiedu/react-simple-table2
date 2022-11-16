import React from "react";
import styled from "styled-components";
import { ObjectTableProps } from "../dist/types";
import { Table, Tbody, Td, Tr } from "./table";
import { resolveCellValue } from "./utils";

const ObjectTableRoot = styled(Table)``;

export const ObjectTable = <T,>({
  data,
  props,
  tbodyAttrs,
  trAttrs,
  tdAttrs,
  split = 0.35,
  ...rest
}: ObjectTableProps<T>): any => {
  return (
    <ObjectTableRoot {...rest}>
      <Tbody {...tbodyAttrs}>
        {props.map((prop, propIndex: number) => {
          const ratio = split * 100;

          return (
            <Tr key={propIndex} {...trAttrs}>
              <Td style={{ width: `${ratio}%` }} {...tdAttrs}>
                {prop[0]}
              </Td>

              <Td style={{ width: `${100 - ratio}%` }} {...tdAttrs}>
                {resolveCellValue(data, prop[1], propIndex)}
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </ObjectTableRoot>
  );
};
