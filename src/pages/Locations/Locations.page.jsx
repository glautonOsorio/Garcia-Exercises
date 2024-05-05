import * as Styled from "../Pages.styles";
import { LocationContext } from "../../contexts/Locations.context";
import { useContext } from "react";
import { CardsComponent } from "../../components/Card/Card.component";

export const LocationsPage = () => {
  const { locations } = useContext(LocationContext);

  return (
    <Styled.PageContainer>
      <Styled.PageGrid>
        {locations ? (
          locations.map((location) => {
            return <CardsComponent key={location.id} item={location} />;
          })
        ) : (
          <h1>Error</h1>
        )}
      </Styled.PageGrid>
    </Styled.PageContainer>
  );
};
