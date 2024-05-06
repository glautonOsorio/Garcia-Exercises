import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 1.2rem;
  background: ${({ $theme }) => $theme.primary};
  text-align: center;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 1rem;
    padding: 2rem 1rem;
    height: 4rem;
    text-align: center;

    overflow-wrap: auto;
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  color: ${({ $theme }) => $theme.text};
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
  text-decoration: none;
  text-shadow: 0.1rem 0.1rem 0.2rem ${({ $theme }) => $theme.tertiary};
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    padding: 0.8rem 1rem;
    gap: 1rem;
    font-size: 0.8rem;
  }
`;
