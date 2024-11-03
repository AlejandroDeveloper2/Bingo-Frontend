import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  display: flex;
  position: relative;
  background-color: var(--black);
  padding: var(--spacing-xl) var(--spacing-md);
  gap: var(--spacing-sm);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h2 {
    color: var(--white);
    font-size: var(--font-size-lg);
    text-align: center;
    text-transform: capitalize;
    font-weight: bold;
  }
  img {
    object-fit: contain;
    transform: rotate(45deg);
    width: 60px;
    height: 60px;
    position: absolute;
    right: 20px;
    top: 20px;
  }

  @media (min-width: 768px) {
    gap: var(--spacing-md);
    padding: var(--spacing-4xl) var(--spacing-xl);
    h2 {
      font-size: var(--font-size-xl);
    }
  }

  @media (min-width: 1400px) {
    h2 {
      font-size: var(--font-size-3xl);
    }
  }
`;

const Features = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: var(--spacing-xs);
  flex-direction: column;
`;

const FeatureContent = styled.li`
  list-style: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-2xs);

  svg {
    width: 18px;
    height: 18px;
    color: var(--white);
  }
  p {
    color: var(--white);
    font-size: var(--font-size-sm);
    text-align: left;
    text-transform: capitalize;
    font-weight: 300;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: var(--font-size-md);
    }
  }
`;

export { Card, Features, FeatureContent };
