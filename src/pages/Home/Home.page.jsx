import { MapComponent } from "../../components/Leaflet/Leaflet.component";
import * as Styled from "../Pages.styles";

export const HomePage = () => {
  return (
    <Styled.PageContainer>
      <h1>Home Page is Page</h1>

      <MapComponent />
    </Styled.PageContainer>
  );
};
