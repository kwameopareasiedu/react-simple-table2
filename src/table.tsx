import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Thead = styled.thead``;

export const Tr = styled.tr`
  border-bottom: 1px solid #f2f2f2;
`;

export const Th = styled.th`
  text-align: left;
  padding: 0.85rem;
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
  padding: 0.85rem;
`;
