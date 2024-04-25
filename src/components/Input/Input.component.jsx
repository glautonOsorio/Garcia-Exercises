import PropTypes from "prop-types";
import { useContext, useState } from "react";

import * as Styled from "./Input.styles";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ThemeContext } from "../../contexts/Theme.context";

export const InputComponent = ({
  label,
  type,
  id,
  placeholder,
  register,
  error,
  mask,
  as,
  onInput,
  errorMessage,
}) => {
  const { theme } = useContext(ThemeContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Styled.InputGroup>
      <Styled.Label $theme={theme} $color={error && "danger"} htmlFor={id}>
        {label}
      </Styled.Label>

      {type !== "textarea" && (
        <Styled.InputContainer>
          <Styled.Input
            onInput={onInput}
            mask={mask}
            as={as}
            $theme={theme}
            $color={error && "danger"}
            type={showPassword ? "text" : type}
            id={id}
            placeholder={placeholder}
            {...register}
          />
          {type === "password" && (
            <Styled.Icon
              $theme={theme}
              $color={error && "danger"}
              type="button"
              onClick={handleShowPassword}
            >
              {!showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </Styled.Icon>
          )}
          {error && (
            <Styled.ErrorSpan $theme={theme}>{errorMessage}</Styled.ErrorSpan>
          )}
        </Styled.InputContainer>
      )}

      {type === "textarea" && (
        <Styled.TextArea
          $theme={theme}
          $color={error && "danger"}
          id={id}
          placeholder={placeholder}
          {...register}
        />
      )}
    </Styled.InputGroup>
  );
};

InputComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.any,
  error: PropTypes.any,
  errorMessage: PropTypes.any,
};
