import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
  gap: var(--spacing-xl);
`;

const Content = styled.section`
  width: auto;
  height: auto;
  display: grid;
  place-content: center;
  padding-bottom: var(--spacing-md);
  padding-left: var(--spacing-md);
  padding-right: var(--spacing-md);
`;

export { Main, Content };
