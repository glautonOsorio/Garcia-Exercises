import { useContext } from "react";

import { ThemeContext } from "../../contexts/Theme.context";

import * as Styled from "./Button.styles";

export const ButtonComponent = ({
  variant,
  type,
  disabled,
  onClick,
  preset,
  text,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Styled.ButtonGroup $theme={theme}>
      <Styled.NewButton
        variant={variant}
        type={type}
        disabled={disabled}
        onClick={onClick}
        $theme={theme}
        $preset={preset}
      >
        {text}
      </Styled.NewButton>
    </Styled.ButtonGroup>
  );
};
