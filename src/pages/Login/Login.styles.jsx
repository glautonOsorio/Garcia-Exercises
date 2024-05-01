import styled from "styled-components";
export const LoginPage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${({ $theme }) => $theme.background};
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 29rem;
  right: 1rem;
  overflow: hidden;
  z-index: 0;
`;

export const Images = styled.img`
  max-width: 40rem;
`;
