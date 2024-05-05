import styled from "styled-components";

export const App = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: ${({ $theme }) => $theme.background};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${({ $theme }) => $theme.background};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 1rem;
  background-color: ${({ $theme }) => $theme.background};
`;
