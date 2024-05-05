import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
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
`;
