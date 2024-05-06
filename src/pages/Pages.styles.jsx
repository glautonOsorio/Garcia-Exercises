import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.2rem;
  }

  @media (max-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export const PageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const Span = styled.span`
  font-weight: 900;
  font-size: 4rem;
  margin-bottom: 0.6rem;
  color: ${({ $theme }) => $theme.text};
  display: block;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;
