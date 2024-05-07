import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ThemeContext } from "../../contexts/Theme.context.jsx";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import * as Styled from "./Footer.styles";

export function FooterComponent() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <Styled.FooterContainer $theme={theme}>
      <Styled.FooterTextContent>
        <Styled.FooterSpan
          onClick={() => {
            navigate("/");
          }}
          $theme={theme}
        >
          Todos direitos reservados para @Garcia Exercises TM
        </Styled.FooterSpan>
      </Styled.FooterTextContent>
      <Styled.FooterTextContent>
        <Styled.StyledLink $theme={theme} to="https://github.com/glautonOsorio">
          <GitHubIcon fontSize="large" />
        </Styled.StyledLink>
        <Styled.StyledLink
          $theme={theme}
          to="https://www.linkedin.com/in/glauton-osorio/"
        >
          <LinkedInIcon fontSize="large" />
        </Styled.StyledLink>
      </Styled.FooterTextContent>
    </Styled.FooterContainer>
  );
}
