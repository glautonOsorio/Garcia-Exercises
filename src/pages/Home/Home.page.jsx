import { MapComponent } from "../../components/Leaflet/Leaflet.component";
import * as Styled from "./Home.styles";

export const HomePage = () => {
  return (
    <Styled.HomeContainer>
      <h1>Home Page is Page</h1>

      <MapComponent/>
    </Styled.HomeContainer>
  );
};
