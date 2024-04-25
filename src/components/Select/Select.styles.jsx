import styled from "styled-components";

export const SelectGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const SelectLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  color: ${({ $color, $theme }) => {
    return $color === "danger" ? $theme.error : $theme.text;
  }};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const FormSelect = styled.select`
  display: flex;
  padding: 0.5rem;
  align-items: flex-start;
  align-self: stretch;
  text-align: center;
  border-radius: 0.3125rem;
  border: 1px solid
    ${({ $color, $theme }) => {
      return $color === "danger" ? $theme.error : $theme.tertiary;
    }};
  color: ${({ $color, $theme }) => {
    return $color === "danger" ? $theme.error : $theme.text;
  }};
  width: 100%;
  font-size: 1rem;
  height: 3rem;
  background-color: transparent;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const SelectOption = styled.option`
  color: ${({ $color, $theme }) => {
    return $color === "danger" ? $theme.error : $theme.text;
  }};
  background-color: transparent;
  display: flex;
  font-size: 1.5;
  padding: 1rem;
  align-items: flex-start;
  align-self: stretch;
  text-align: center;
  &:hover {
    background-color: ${({ $theme }) => {
      $theme.tertiary;
    }};
    color: ${({ $color, $theme }) => {
      return $color === "danger" ? $theme.error : $theme.text;
    }};
  }
`;

export const HelperText = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  color: ${({ $theme }) => {
    $theme.error;
  }};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
