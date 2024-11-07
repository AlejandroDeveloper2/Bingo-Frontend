import styled from "styled-components";

interface OverlayStyle {
  isvisible: string;
}

const Overlay = styled.div<OverlayStyle>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--overlay-color);
  z-index: ${({ isvisible }: OverlayStyle) =>
    isvisible === "true" ? "50" : "-50"};
  transition: opacity 0.8s ease-in;
  opacity: ${({ isvisible }: OverlayStyle) =>
    isvisible === "true" ? "1" : "0"};
  button {
    width: 60px;
    height: 60px;
    padding: 0;
    position: absolute;
    top: 12px;
    right: 12px;
  }
`;

const Dialog = styled.dialog`
  border: none;
  background-color: var(--white);
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  justify-content: flex-start;
  align-items: center;
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 1400px) {
    width: 520px;
  }
`;

export { Overlay, Dialog };
