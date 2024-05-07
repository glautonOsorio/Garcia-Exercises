import PropTypes from "prop-types";
import { useContext } from "react";

import { ThemeContext } from "../../contexts/Theme.context";

import * as Styled from "./Select.styles";

export const SelectComponent = ({
  register,
  error,
  helperText,
  label,
  option,
  id,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Styled.SelectGroup>
      <Styled.SelectLabel
        $theme={theme}
        $color={error && "danger"}
        htmlFor={id}
      >
        {label}
      </Styled.SelectLabel>
      <Styled.FormSelect
        $theme={theme}
        id={id}
        $color={error && "danger"}
        {...register}
      >
        {option &&
          option.map((item, index) => {
            return (
              <Styled.SelectOption
                $theme={theme}
                key={index}
                value={item?.value}
              >
                {item?.label}
              </Styled.SelectOption>
            );
          })}
      </Styled.FormSelect>
      {error && (
        <Styled.HelperText $theme={theme} $color={error && "danger"}>
          {helperText}
        </Styled.HelperText>
      )}
    </Styled.SelectGroup>
  );
};

SelectComponent.propTypes = {
  register: PropTypes.any,
  option: PropTypes.any,
  error: PropTypes.any,
  value: PropTypes.any,
  type: PropTypes.string,
  id: PropTypes.string,
};
