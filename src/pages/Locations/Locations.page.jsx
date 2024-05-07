import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { LocationContext } from "../../contexts/Locations.context";
import { CardsComponent } from "../../components/Card/Card.component";

import { GetByUserId } from "../../services/Locations/Locations.service";
import { AuthContext } from "../../contexts/Auth.context.jsx";

import * as Styled from "../Pages.styles";

export const LocationsPage = () => {
  const { locations } = useContext(LocationContext);
  const [filterLocation, setFilterLocation] = useState([]);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      GetByUserId(id)
        .then((res) => {
          setFilterLocation(res);
          if (res.length == 0) {
            toast.error("No locations found", {
              position: "top-center",
              theme: "colored",
              autoClose: 2000,
            });
            navigate("/");
          }
        })
        .catch((error) => {
          toast.error("Error fetching locations: " + error.message, {
            position: "top-center",
            theme: "colored",
            autoClose: 2000,
          });
          navigate("/");
        });
    }
    if (locations && locations.length === 0) {
      toast.error("No locations found", {
        position: "top-center",
        theme: "colored",
        autoClose: 2000,
      });
      navigate("/");
    }
  }, []);

  return (
    <Styled.PageContainer>
      <Styled.PageGrid>
        {id
          ? filterLocation &&
            filterLocation.map((location) => (
              <CardsComponent key={location.id} item={location} userId={id} />
            ))
          : locations &&
            locations.map((location) => (
              <CardsComponent
                key={location.id}
                item={location}
                userId={user && user.id}
              />
            ))}
      </Styled.PageGrid>
    </Styled.PageContainer>
  );
};
