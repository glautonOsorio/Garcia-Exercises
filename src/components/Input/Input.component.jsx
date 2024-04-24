import PropTypes from "prop-types";
import { useState } from "react";

import * as Styled from "./Input.style";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Styled.InputGroup>
      <Styled.Label $color={error && "danger"} htmlFor={id}>
        {label}
      </Styled.Label>

      {type !== "textarea" && (
        <Styled.InputContainer>
          <Styled.Input
            onInput={onInput}
            mask={mask}
            as={as}
            $color={error && "danger"}
            type={showPassword ? "text" : type}
            id={id}
            placeholder={placeholder}
            {...register}
          />
          {type === "password" && (
            <Styled.Icon
              $color={error && "danger"}
              type="button"
              onClick={handleShowPassword}
            >
              {!showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </Styled.Icon>
          )}
          {error && <Styled.ErrorSpan>{errorMessage}</Styled.ErrorSpan>}
        </Styled.InputContainer>
      )}

      {type === "textarea" && (
        <Styled.TextArea
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
