import styled from "styled-components";

export const InputGroup = styled.div`
  position: relative; /* Ensure relative positioning for ErrorSpan */
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  color: ${({ $color, $theme }) =>
    $color === "danger" ? $theme.error : $theme.text};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Input = styled.input`
  display: flex;
  padding: 0.5rem;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.3125rem;
  font-size: 1rem;
  border: 1px solid
    ${({ $color, $theme }) =>
      $color === "danger" ? $theme.error : $theme.tertiary};
  color: ${({ $color, $theme }) =>
    $color === "danger" ? $theme.error : $theme.text};
  width: 100%;
  height: 3rem;
`;

export const TextArea = styled.textarea`
  display: flex;
  padding: 0.5rem;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.3125rem;
  border: 1px solid
    ${({ $color, $theme }) =>
      $color === "danger" ? $theme.error : $theme.tertiary};
  color: ${({ $color, $theme }) =>
    $color === "danger" ? $theme.error : $theme.text};
  height: 5rem;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Icon = styled.button`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  cursor: pointer;
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color, $theme }) =>
    $color === "danger" ? $theme.error : $theme.tertiary};
`;

export const ErrorSpan = styled.span`
  position: absolute; /* Position the error text */
  bottom: 0.2rem;
  left: 0.2rem;
  color: ${({ $theme }) => $theme.error};
  font-size: 0.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
