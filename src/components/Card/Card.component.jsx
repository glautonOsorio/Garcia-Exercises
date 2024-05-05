import { Chip } from "@mui/material";
import * as Styled from "./Card.styles";
import "leaflet/dist/leaflet.css";

import { TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme.context";

export const CardsComponent = ({ item }) => {
  const { theme } = useContext(ThemeContext);

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [38, 38], // size of the icon
  });

  return (
    <Styled.CardContainer $theme={theme} key={item.id}>
      <Styled.StyledMapContainer
        $theme={theme}
        center={[
          Number(item.coordinates.latitude),
          Number(item.coordinates.longitude),
        ]}
        zoom={13}
        maxZoom={18}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker
          position={[
            Number(item.coordinates.latitude),
            Number(item.coordinates.longitude),
          ]}
          key={item.id}
          icon={customIcon}
        >
          <Styled.StyledPopup $theme={theme} />
        </Marker>
      </Styled.StyledMapContainer>
      <Styled.CardContent $theme={theme}>
        <Styled.CardTitle $theme={theme}>
          {item.name} / {item.city}
        </Styled.CardTitle>
        <Styled.CardGrid $theme={theme}>
          {Object.values(item.sports_types).map(
            (sport, index) =>
              sport.hasOption && (
                <Styled.SportsChip
                  $theme={theme}
                  key={index}
                  label={sport.name}
                />
              )
          )}
        </Styled.CardGrid>
        <Styled.CardText $theme={theme}>{item.description}</Styled.CardText>
      </Styled.CardContent>
    </Styled.CardContainer>
  );
};
