import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Form = styled.form`
  width: 60%;
  height: 85%;
  margin: 1rem;
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  overflow-y: scroll;
  background: ${({ $theme }) => $theme.primary};
  @media (max-width: 1024px) {
    width: 80%;
  }
`;
export const LoginForm = styled.form`
  width: 30%;
  margin: 1rem;
  border: none;
  text-align: center;
  border-radius: 1rem;
  background: ${({ $theme }) => $theme.primary};

  @media (max-width: 1024px) {
    width: 60%;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  gap: 1rem;

  @media (max-width: 1024px) {
    gap: 0.5rem;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  gap: 1rem;
  margin: 0.5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormTitle = styled.legend`
  color: ${({ $theme }) => $theme.text};
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1rem;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const FormSubTitle = styled.legend`
  color: ${({ $theme }) => $theme.text};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1rem;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

export const FormLegend = styled(NavLink)`
  color: ${({ $theme }) => $theme.accent};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 1rem;
  text-decoration: none;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
