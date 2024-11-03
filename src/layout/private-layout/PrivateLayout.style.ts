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
  width: 320px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: var(--spacing-6xl);
  /* margin-top: 200px; */

  @media (min-width: 768px) {
    width: 420px;
  }

  @media (min-width: 768px) {
    width: auto;
    max-width: 778px;
  }
`;

export { Main, Content };
