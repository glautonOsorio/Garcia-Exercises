import styled from "styled-components";
import { MapContainer, Popup } from "react-leaflet";

export const StyledMapContainer = styled(MapContainer)`
  height: 30rem;
  width: 75%;
  border-radius: 1rem;
`;

export const StyledPopup = styled(Popup)`
  height: 10rem;
  width: 24rem;
  background-color: ${({ $theme }) => $theme.secondary} !important;
  border-radius: 2rem;
  padding: 1rem;

  .leaflet-popup-close-button {
    position: relative !important;
    top: -9.5rem !important;
    left: 10.5rem !important;
    font-size: 2rem !important;
    font-weight: 900;
    color: ${({ $theme }) => $theme.text} !important;
  }
`;

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  width: 100%;
`;

export const PopupTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ $theme }) => $theme.text} !important;
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;
`;

export const PopupSpan = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ $theme }) => $theme.text};

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

export const PopupRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  
`;

export const PopupSportType = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ $theme }) => $theme.text};
  background-color: ${({ $theme }) => $theme.tertiary};
  border-radius: 1rem;


  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;
