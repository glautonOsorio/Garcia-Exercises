import { AuthContext } from "../../contexts/Auth.context.jsx";
import { LocationContext } from "../../contexts/Locations.context.jsx";
import { useContext, useEffect, useState } from "react";
import { GetByUserId } from "../../services/Locations/Locations.service.jsx";
import { getLocalStorage } from "../../helper/LocalStorageInstance.jsx";
import { GetEmail } from "../../services/Users/Users.services.jsx";
import * as Styled from "./Dashboard.styles.jsx";
import { ThemeContext } from "../../contexts/Theme.context.jsx";

export const DashboardComponent = () => {
  const { users, isLogged } = useContext(AuthContext);
  const { locations } = useContext(LocationContext);
  const [userLocations, setUserLocations] = useState();
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const loggedUser = getLocalStorage("logged");
    GetEmail(loggedUser).then((res) => {
      GetByUserId(res[0].id).then((r) => {
        setUserLocations(r);
      });
    });
  }, []);
  return (
    <Styled.DashRow>
      <Styled.DashColumn $theme={theme}>
        {users && users.length > 0 ? (
          <>
            <Styled.DashRow>
              <Styled.RegisterUsers $theme={theme} />
              <Styled.DashText $theme={theme}>{users.length}</Styled.DashText>
            </Styled.DashRow>
            <Styled.DashSubText $theme={theme}>
              Usuários Cadastrados
            </Styled.DashSubText>
          </>
        ) : (
          <Styled.DashText $theme={theme}>
            Você ainda não cadastrou nada
          </Styled.DashText>
        )}
      </Styled.DashColumn>
      <Styled.DashColumn $theme={theme}>
        {locations && locations.length > 0 ? (
          <>
            <Styled.DashRow>
              <Styled.Trails $theme={theme} />
              <Styled.DashText $theme={theme}>
                {locations.length}
              </Styled.DashText>
            </Styled.DashRow>
            <Styled.DashSubText $theme={theme}>
              Locais Cadastrados
            </Styled.DashSubText>
          </>
        ) : (
          <Styled.DashText $theme={theme}>
            Você ainda não cadastrou nada
          </Styled.DashText>
        )}
      </Styled.DashColumn>
      {isLogged ? (
        <Styled.DashColumn $theme={theme}>
          {userLocations && userLocations.length > 0 ? (
            <>
              <Styled.DashRow>
                <Styled.YourTrails $theme={theme} />
                <Styled.DashText $theme={theme}>
                  {userLocations.length}
                </Styled.DashText>
              </Styled.DashRow>
              <Styled.DashSubText $theme={theme}>
                Você Cadastrou
              </Styled.DashSubText>
            </>
          ) : (
            <Styled.DashText $theme={theme}>
              Você ainda não cadastrou nada
            </Styled.DashText>
          )}
        </Styled.DashColumn>
      ) : (
        <span></span>
      )}
    </Styled.DashRow>
  );
};
