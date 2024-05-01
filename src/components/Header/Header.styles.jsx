import { NavLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import Person3Icon from "@mui/icons-material/Person3";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 5rem;
  background: ${({ $theme }) => $theme.primary};

  @media (max-width: 1024px) {
    height: auto;
    padding: 2rem 1rem;
  }
`;

export const HeaderTextContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 1024px) {
    align-items: center;
    gap: 0.5rem;
  }
`;
export const HeaderColumm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;
export const HeaderSpan = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ $theme }) => $theme.text};

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

export const HeaderTitle = styled.h1`
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
  color: ${({ $theme }) => $theme.accent};
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

export const LoggedIconMan = styled(PersonIcon)`
  font-size: 3.5rem !important;
  border: 0.2rem solid ${({ $theme }) => $theme.secondary} !important;
  border-radius: 2rem;
  background-color: ${({ $theme }) => $theme.secondary} !important;
`;
export const LoggedIconWoman = styled(Person3Icon)`
  font-size: 3.5rem !important;
  border: 0.2rem solid ${({ $theme }) => $theme.secondary} !important;
  border-radius: 2rem;
  background-color: ${({ $theme }) => $theme.secondary} !important;
`;
