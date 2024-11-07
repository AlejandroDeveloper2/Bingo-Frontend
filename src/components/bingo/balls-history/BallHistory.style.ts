import styled from "styled-components";

const BallList = styled.ul`
  width: 100%;
  height: auto;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: var(--spacing-sm);
  flex-wrap: wrap;

  li {
    list-style: none;
    display: block;
  }

  @media (min-width: 768px) {
    max-height: 600px;
  }
`;

export { BallList };
