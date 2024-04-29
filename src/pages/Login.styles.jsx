import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ $theme }) => {
    $theme.background;
  }};
`;

export const BackgroundImage = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: -1;
`;

export const Images = styled.img`
  position: relative;
  left: 16rem;
  top: 4rem;
`;
