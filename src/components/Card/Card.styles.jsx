import styled from "styled-components";
import { MapContainer, Popup } from "react-leaflet";
import { Chip } from "@mui/material";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 30rem;
  height: 15rem;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.2rem ${({ $theme }) => $theme.tertiary};
  margin-bottom: 1rem;

  @media (max-width: 1200px) {
    width: 20rem;
    height: 8rem;
  }
`;

export const StyledMapContainer = styled(MapContainer)`
  min-height: 100%;
  min-width: 50% !important; // Adjusted width to fill the CardContainer
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

export const StyledPopup = styled(Popup)`
  height: auto;
  width: auto;
`;
// File 4

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;
  padding: 0.5rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: ${({ $theme }) => $theme.secondary};
  box-shadow: 0.2rem 0.2rem 0.2rem ${({ $theme }) => $theme.tertiary};

  @media (max-width: 1200px) {
    padding: 0.5rem; // Adjusted padding for smaller screens
  }
`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 0.8rem;
  gap: 0.2rem;
  width: 50%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardTitle = styled.h1`
  color: ${({ $theme }) => $theme.text};
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 2rem;

  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }
`;

export const CardText = styled.span`
  color: ${({ $theme }) => $theme.text};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  padding: 1rem;
  overflow-y: hidden;

  @media (max-width: 1200px) {
    font-size: 0.7rem;
  }
`;

export const SportsChip = styled(Chip)`
  background-color: ${({ $theme }) => $theme.accent} !important;
  font-size: 1rem !important;
  font-weight: 900 !important;
  width: 8rem !important;
`;
