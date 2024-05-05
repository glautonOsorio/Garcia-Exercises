import styled from "styled-components";
import GroupIcon from "@mui/icons-material/Group";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";

export const DashGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15rem;
  padding: 2rem;
`;

export const DashRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
    gap: 0.5rem;
  }
`;

export const DashColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16rem;
  border-radius: 2.5rem;
  padding: 0.5rem;
  background-color: ${({ $theme }) => $theme.secondary};
  gap: 1rem;
  text-align: center;

  @media (max-width: 1024px) {
    gap: 0.5rem;
  }
`;

export const RegisterUsers = styled(GroupIcon)`
  font-size: 9rem !important;
  border: 0.2rem solid ${({ $theme }) => $theme.secondary} !important;
  border-radius: 2rem;
  color: ${({ $theme }) => $theme.text} !important;
`;

export const Trails = styled(LocationOnIcon)`
  font-size: 9rem !important;
  border: 0.2rem solid ${({ $theme }) => $theme.secondary} !important;
  border-radius: 2rem;
  color: ${({ $theme }) => $theme.text} !important;
`;
export const YourTrails = styled(PersonPinCircleIcon)`
  font-size: 10rem !important;
  border: 0.2rem solid ${({ $theme }) => $theme.secondary} !important;
  border-radius: 2rem;
  color: ${({ $theme }) => $theme.text} !important;
`;

export const DashText = styled.h1`
  font-size: 5rem;
  color: ${({ $theme }) => $theme.text};
`;
export const DashSubText = styled.span`
  font-size: 1.5rem;
  color: ${({ $theme }) => $theme.text};
`;
