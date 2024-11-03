import styled from "styled-components";

const CustomLinkContainer = styled.div`
  width: 100%;
  display: inline-flex;
  gap: var(--spacing-sm);
  justify-content: center;
  align-items: center;

  label,
  a {
    color: var(--black);
    white-space: no-wrap;
    text-transform: capitalize;
    font-size: var(--font-size-md);
    font-weight: normal;
    text-align: center;
  }
  a {
    text-decoration: none;
    font-weight: bold;
  }
`;

export { CustomLinkContainer };
