import * as Styled from "../Pages.styles";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/Theme.context";

export const ErrorPage = () => {
  const { theme } = useContext(ThemeContext);
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        navigate("/");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <Styled.PageContainer>
      <div>
        <Styled.Span $theme={theme}>
          Você aparenta estar perdido. <br /> Você será redirecionado para a
          página principal em {countdown} segundos.
        </Styled.Span>
        <Styled.Span $theme={theme}>
          Erro 400: Página não encontrada.
        </Styled.Span>
      </div>
    </Styled.PageContainer>
  );
};
