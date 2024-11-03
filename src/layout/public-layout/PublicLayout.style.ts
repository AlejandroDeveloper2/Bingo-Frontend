import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-content: center;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: transparent;
`;

const ContentContainer = styled.section`
  width: 320px;
  height: auto;
  background-color: transparent;
  display: flex;
  position: relative;
  flex-direction: column;
  gap: var(--spacing-4xl);
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 420px;
  }
  @media (min-width: 1400px) {
    width: auto;
    flex-direction: row;
    gap: var(--spacing-7xl);
  }
`;

export { Main, ContentContainer };
