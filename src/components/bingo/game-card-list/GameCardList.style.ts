import styled from "styled-components";

const ListContainer = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  gap: var(--spacing-md);
`;

const Ul = styled.ul`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: var(--spacing-md);
`;

export { ListContainer, Ul };
