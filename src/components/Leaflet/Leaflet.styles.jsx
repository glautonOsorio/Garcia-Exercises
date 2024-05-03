import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const StyledMapContainer = styled(MapContainer)`
  height: 20rem; /* Decrease the height */
  width: 40%; /* Decrease the width */
  border-radius: 2rem;
`;

export const StyledPopup = styled(Popup)`
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
