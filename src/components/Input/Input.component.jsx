import PropTypes from "prop-types";
import { useContext, useState } from "react";

import * as Styled from "./Input.styles";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
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
  readOnly,
  as,
  onInput,
  errorMessage,
  cep,
  onClick,
}) => {
  const { theme } = useContext(ThemeContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Styled.InputGroup $type={type}>
      {type === "checkbox" && (
        <Styled.CheckboxLabel $theme={theme}>
          <Styled.CheckboxInput
            $theme={theme}
            type="checkbox"
            onInput={onInput}
            mask={mask}
            as={as}
            $color={error && "danger"}
            readOnly={readOnly}
            id={id}
            placeholder={placeholder}
            {...register}
          />
          {label}
        </Styled.CheckboxLabel>
      )}

      {type !== "checkbox" && type !== "textarea" && (
        <>
          <Styled.Label $theme={theme} $color={error && "danger"} htmlFor={id}>
            {label}
          </Styled.Label>
          <Styled.InputContainer>
            <Styled.Input
              onInput={onInput}
              mask={mask}
              as={as}
              $theme={theme}
              $color={error && "danger"}
              type={showPassword ? "text" : type}
              readOnly={readOnly}
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
            {cep === true && (
              <Styled.Icon
                $theme={theme}
                $color={error && "danger"}
                type="button"
                onClick={onClick}
              >
                <SearchOutlinedIcon />
              </Styled.Icon>
            )}
            {error && (
              <Styled.ErrorSpan $theme={theme}>{errorMessage}</Styled.ErrorSpan>
            )}
          </Styled.InputContainer>
        </>
      )}

      {type === "textarea" && (
        <>
          <Styled.Label $theme={theme} $color={error && "danger"} htmlFor={id}>
            {label}
          </Styled.Label>
          <Styled.TextArea
            $theme={theme}
            $color={error && "danger"}
            readOnly={readOnly}
            id={id}
            placeholder={placeholder}
            {...register}
          />
          {error && (
            <Styled.ErrorSpan $theme={theme}>{errorMessage}</Styled.ErrorSpan>
          )}
        </>
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
  // Add prop types for new props
  mask: PropTypes.any,
  readOnly: PropTypes.bool,
  as: PropTypes.any,
  onInput: PropTypes.func,
  cep: PropTypes.bool,
  onClick: PropTypes.func,
};
