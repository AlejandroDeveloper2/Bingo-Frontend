import styled, { css } from "styled-components";

const inputTextStyle = css`
  font-size: var(--font-size-md);
  font-family: var(--font-family);
  font-weight: normal;
  text-align: left;
`;

const InputContainer = styled.div`
  width: 100%;
  justify-self: center;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  justify-content: center;
  align-items: flex-start;

  label[id="input-label"] {
    font-size: var(--font-size-md);
    font-family: var(--font-family);
    font-weight: bold;
    color: var(--black);
    text-align: center;
    text-transform: capitalize;
  }

  @media (min-width: 768px) {
    label[id="input-label"] {
      font-size: var(--font-size-lg);
    }
  }
`;

const InputBody = styled.kbd`
  width: 100%;
  height: auto;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-rounded);
  display: inline-flex;
  gap: var(--spacing-sm);
  justify-content: flex-start;
  align-items: center;
  background-color: var(--white);
  border: solid 1.5px var(--black);
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.6s ease;

  svg {
    color: var(--black);
    width: 24px;
    height: 24px;
    transition: transform 0.5s ease;
  }

  &:hover {
    box-shadow: 0 0 5px var(--box-shadow-color);

    svg {
      transform: rotate(15deg);
    }
  }

  @media (min-width: 768px) {
    padding: var(--spacing-md) var(--spacing-xl);
  }
`;

const InputElement = styled.input`
  outline: none;
  border: none;
  width: 80%;
  height: auto;
  ${inputTextStyle};
  color: var(--black);
  &::placeholder {
    ${inputTextStyle};
    color: var(--medium-gray);
  }
`;

export { InputContainer, InputBody, InputElement };
