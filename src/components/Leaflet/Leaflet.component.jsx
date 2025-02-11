import { useContext } from "react";

import "./Map.css";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";
import { TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { ThemeContext } from "../../contexts/Theme.context";
import { LocationContext } from "../../contexts/Locations.context";

import * as Styled from "./Leaflet.styles";

export const MapComponent = () => {
  const { locations } = useContext(LocationContext);
  const { theme } = useContext(ThemeContext);

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [38, 38], // size of the icon
  });

  // custom cluster icon
  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  return (
    <Styled.StyledMapContainer
      center={[-27.5935, -48.55854]}
      zoom={12}
      maxZoom={20}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {locations &&
          locations.map((local, index) => (
            <Marker
              position={[
                Number(local.coordinates.latitude),
                Number(local.coordinates.longitude),
              ]}
              key={index}
              icon={customIcon}
            >
              <Styled.StyledPopup $theme={theme}>
                <Styled.PopupContainer $theme={theme}>
                  <Styled.CloseButton $theme={theme}>
                    &times;
                  </Styled.CloseButton>
                  <Styled.PopupTitle $theme={theme}>
                    {local.name}
                  </Styled.PopupTitle>
                  <Styled.PopupContent>
                    <Styled.PopupSpan $theme={theme}>
                      {local.location}
                    </Styled.PopupSpan>
                    <Styled.PopupGrid>
                      {Object.values(local.sports_types).map(
                        (sport, index) =>
                          sport.hasOption && (
                            <Styled.PopupSportType $theme={theme} key={index}>
                              {sport.name}
                            </Styled.PopupSportType>
                          )
                      )}
                    </Styled.PopupGrid>
                    <Styled.PopupSpan $theme={theme}>
                      {local.description}
                    </Styled.PopupSpan>
                  </Styled.PopupContent>
                </Styled.PopupContainer>
              </Styled.StyledPopup>
            </Marker>
          ))}
      </MarkerClusterGroup>
    </Styled.StyledMapContainer>
  );
};
