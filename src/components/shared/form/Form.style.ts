import styled from "styled-components";

const FormBody = styled.form`
  width: auto;
  height: auto;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: var(--spacing-md);
  justify-content: flex-start;
  align-items: center;
  position: relative;

  h2 {
    font-size: var(--font-size-3xl);
    color: var(--black);
    text-align: center;
    font-weight: 500;
    text-transform: capitalize;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: var(--font-size-4xl);
    }
  }

  @media (min-width: 1400px) {
    gap: var(--spacing-xl);
    h2 {
      font-size: var(--font-size-5xl);
    }
  }
`;

const FieldSetContainer = styled.fieldset`
  width: 100%;
  height: auto;
  gap: var(--spacing-sm);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;

  @media (min-width: 1400px) {
    width: 500px;
  }
`;

export { FormBody, FieldSetContainer };
