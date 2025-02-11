import styled from "styled-components";
import { MapContainer, Popup } from "react-leaflet";

export const StyledMapContainer = styled(MapContainer)`
  height: 30rem;
  width: 75%;
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledPopup = styled(Popup)`
  height: auto;
  width: auto;
`;

export const PopupContainer = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  background-color: ${({ $theme }) => $theme.secondary};
`;

export const PopupTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ $theme }) => $theme.text};
  margin-bottom: 0.5rem;
`;

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  justify-content: flex-start;
`;

export const PopupSpan = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ $theme }) => $theme.text};
  max-height: 100px;
  overflow-y: auto;
`;

export const PopupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 1rem;
`;

export const PopupSportType = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ $theme }) => $theme.text2};
  background-color: ${({ $theme }) => $theme.tertiary};
  border-radius: 1rem;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
  cursor: pointer;
  font-size: 2rem;
  color: ${({ $theme }) => $theme.text};

  @media (max-width: 768px) {
    right: 1rem;
  }
`;
