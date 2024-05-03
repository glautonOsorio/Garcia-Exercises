import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const SMapContainer = styled(MapContainer)`
  height: 90vh;
  width: 90%;
  border-radius: 2rem;
`;

export const SPopup = styled(Popup)`
  background-color: #333;
  height: 2em;
  width: 2em;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.2rem;
  box-shadow: 0 0 0px 5px #fff;
`;
