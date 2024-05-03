import * as Styled from "./Home.styles";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point } from "leaflet";
import { MapComponent } from "../../components/Leaflet/Leaflet.component";
export const HomePage = () => {
  // create custom icon
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

  // markers
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I am pop up 1",
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am pop up 2",
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello, I am pop up 3",
    },
  ];
  return (
    <Styled.HomeContainer>
      <h1>Home Page is Page</h1>
      {/*<Styled.SMapContainer center={[48.8566, 2.3522]} zoom={13} maxZoom={18}>
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {markers.map((marker, index) => (
            <Marker position={marker.geocode} key={index} icon={customIcon}>
              <Styled.SPopup>{marker.popUp}</Styled.SPopup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </Styled.SMapContainer>*/}
      <MapComponent />
    </Styled.HomeContainer>
  );
};
