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
  white-space: nowrap;
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
  padding: 0.85rem;
  vertical-align: top;
`;

export const ThFlex = styled.div`
  display: flex;
  padding: 0.85rem;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.35s;

  &:hover {
    cursor: pointer;
    background-color: #f9f9f9;
  }
`;
