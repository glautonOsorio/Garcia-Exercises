import * as Styled from "./Card.styles";
import "leaflet/dist/leaflet.css";
import { toast } from "react-toastify";

import { TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme.context";
import { ButtonComponent } from "../Button/Button.component";
import { useNavigate } from "react-router-dom";
import {
  Delete,
  GetLocations,
} from "../../services/Locations/Locations.service";
import { LocationContext } from "../../contexts/Locations.context";

export const CardsComponent = ({ item, userId }) => {
  const { theme } = useContext(ThemeContext);
  const { setLocations } = useContext(LocationContext);
  const navigate = useNavigate();

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [38, 38], // size of the icon
  });

  const DeleteLocal = async () => {
    try {
      await Delete(item.id);
      await GetLocations().then((res) => {
        setLocations(res);
      });
      toast.success("Local deletado com sucesso", {
        position: "bottom-right",
        theme: "colored",
        autoClose: 2000,
      });
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(`Erro ao deletar ${error.response.data.message}`, {
          position: "top-center",
          theme: "colored",
          autoClose: 2000,
        });
      } else {
        toast.error(`Erro ao deletar: ${error.message}`, {
          position: "top-center",
          theme: "colored",
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <Styled.CardContainer $theme={theme} key={item.id}>
      {item ? (
        <>
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
            {userId == item.user_id ? (
              <Styled.CardButtonWrapper>
                <ButtonComponent
                  type="button"
                  text="Deletar"
                  preset="delete"
                  variant="outlined"
                  onClick={DeleteLocal}
                />
                <ButtonComponent
                  type="submit"
                  text="Editar"
                  preset="edit"
                  variant="outlined"
                  onClick={() => navigate(`/register-locations/${item.id}`)}
                />
              </Styled.CardButtonWrapper>
            ) : (
              <span></span>
            )}
          </Styled.CardContent>
        </>
      ) : (
        <Styled.CardTitle> Nenhum local cadastrado</Styled.CardTitle>
      )}
    </Styled.CardContainer>
  );
};
