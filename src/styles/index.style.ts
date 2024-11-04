import styled from "styled-components";

const Column = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 350px;
    align-items: flex-start;
    gap: var(--spacing-md);
  }
  @media (min-width: 1400px) {
    width: 520px;
  }
`;

const Grid = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* display: grid;
  grid-template-rows: repeat(2, auto); */
  gap: var(--spacing-md);
  /* align-items: flex-start; */

  @media (min-width: 768px) {
    /* grid-template-rows: none;
    grid-template-columns: repeat(2, 1f); */
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    gap: var(--spacing-xl);
  }
`;

export { Column, Grid };
