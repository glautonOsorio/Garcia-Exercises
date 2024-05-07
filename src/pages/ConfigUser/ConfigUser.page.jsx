import * as Styled from "../Pages.styles";

import { RegisterUser } from "../../components/Forms/RegisterUser/RegisterUser.component";

export const ConfigUserPage = () => {
  return (
    <Styled.PageContainer>
      <RegisterUser />
    </Styled.PageContainer>
  );
};
