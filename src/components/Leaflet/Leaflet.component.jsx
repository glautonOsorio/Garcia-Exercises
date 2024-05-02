import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

const StyledMapContainer = styled(MapContainer)`
  height: 400px;
`;

const StyledPopup = styled(Popup)`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
`;

const MyMap = () => {
  return (
    <StyledMapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
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

export default MyMap;

{
  /* thank god for indians yuhu */
}
