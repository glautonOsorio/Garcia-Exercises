import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 10%;
  margin-top: auto;
  background: ${({ $theme }) => $theme.primary};

  @media (max-width: 1024px) {
    height: auto;
    padding: 2rem 1rem;
  }
`;

export const FooterTextContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 1024px) {
    align-items: center;
    gap: 0.5rem;
  }
`;

export const FooterColumm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const FooterSpan = styled.span`
  position: relative;
  top: 0.8rem;
  right: 0.8rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ $theme }) => $theme.text};

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

export const FooterTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ $theme }) => $theme.text};
  text-shadow: 0.1rem 0.1rem 0.2rem ${({ $theme }) => $theme.tertiary};
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  color: ${({ $theme }) => $theme.text};
  font-size: 1.5rem;
  font-weight: 400;
  padding: 1rem 1.5rem;
  text-decoration: none;
  text-shadow: 0.1rem 0.1rem 0.2rem ${({ $theme }) => $theme.tertiary};
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    padding: 0.8rem 1rem;
    gap: 1rem;
  }
`;
