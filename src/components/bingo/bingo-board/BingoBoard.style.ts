import styled from "styled-components";

interface CellBlank {
  blank?: string;
  selected: string;
  enabled: string;
}

const BoardContainer = styled.div`
  width: 100%;
  background-color: var(--white);
  justify-content: center;
  align-items: center;
  border-radius: var(--spacing-sm);
  border: 1.5px solid var(--black);
  padding: var(--spacing-md) var(--spacing-md);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: var(--spacing-sm);
  max-width: 520px;
`;

const HeadRow = styled.ul`
  width: 100%;
  background-color: transparent;
  display: inline-flex;
  gap: var(--spacing-2xs);
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    gap: var(--spacing-xs);
  }
`;

const HeadCell = styled.li`
  width: 50px;
  height: 50px;
  display: grid;
  place-content: center;
  border-radius: var(--radius-sm);
  background-color: var(--black);
  list-style: none;

  span {
    color: var(--white);
    font-size: var(--font-size-sm);
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    width: 54px;
    height: 54px;
    span {
      font-size: var(--font-size-xl);
    }
  }

  @media (min-width: 1400px) {
    width: 64px;
    height: 64px;
    span {
      font-size: var(--font-size-3xl);
    }
  }
`;

const Column = styled(HeadRow)`
  flex-direction: column;
`;

const Cell = styled(HeadCell)<CellBlank>`
  cursor: pointer;
  opacity: ${({ enabled, blank }: CellBlank) =>
    enabled === "true" ? "1" : blank ? "1" : "0.3"};
  background-color: ${({ selected }: CellBlank) =>
    selected === "true" ? "var(--green)" : "var(--white)"};
  border: ${({ blank }: CellBlank) =>
    blank ? "none" : "1.5px solid var(--black)"};
  span {
    color: var(--black);
    text-transform: ${({ blank }: CellBlank) => (blank ? "none" : "uppercase")};
    font-size: ${({ blank }: CellBlank) =>
      blank ? "var(--font-size-xs)" : "var(--font-size-sm)"};
  }
  @media (min-width: 768px) {
    span {
      font-size: ${({ blank }: CellBlank) =>
        blank ? "var(--font-size-xs)" : "var(--font-size-xl)"};
    }
  }
  @media (min-width: 1400px) {
    span {
      font-size: ${({ blank }: CellBlank) =>
        blank ? "var(--font-size-xs)" : "var(--font-size-3xl)"};
    }
  }
`;

const Table = styled.ul`
  /* width: 100%; */
  height: auto;
  gap: var(--spacing-2xs);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    gap: var(--spacing-xs);
  }
`;

export { BoardContainer, HeadRow, HeadCell, Column, Cell, Table };
