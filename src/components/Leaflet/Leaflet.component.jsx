import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

const StyledMapContainer = styled(MapContainer)`
  height: 90vh;
  width: 90%;
  border-radius: 2rem;
`;

const StyledPopup = styled(Popup)`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
`;

export const LeafletComponent = () => {
  return (
    <StyledMapContainer
    center={[48.8566, 2.3522]} zoom={13}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <StyledPopup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </StyledPopup>
      </Marker>
    </StyledMapContainer>
  );
};

{
  /* thank god for indians yuhu */
}
