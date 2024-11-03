import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: auto;
  padding: var(--spacing-sm) var(--spacing-xl);
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px var(--light-gray) solid;
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 20; */
  background-color: var(--white);

  button {
    width: 64px;
    height: 64px;
    padding: 0;
  }

  span {
    font-size: var(--font-size-lg);
    color: var(--black);
    font-weight: 400;
    text-align: center;
    display: inline-flex;
    gap: var(--spacing-xs);
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    svg {
      width: 24px;
      height: 24px;
      color: var(--black);
    }
  }

  @media (min-width: 768px) {
    button {
      width: 72px;
      height: 72px;
    }
  }

  @media (min-width: 1400px) {
    padding: var(--spacing-md) var(--spacing-xl);
  }
`;

export { Nav };
