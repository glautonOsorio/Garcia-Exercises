import { DashboardComponent } from "../../components/Dashboard/Dashboard.component";

import { MapComponent } from "../../components/Leaflet/Leaflet.component";

import * as Styled from "../Pages.styles";

export const HomePage = () => {
  return (
    <Styled.PageContainer>
      <DashboardComponent />
      <MapComponent />
    </Styled.PageContainer>
  );
};
