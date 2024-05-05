import styled from "styled-components";
import Button from "@mui/material/Button";

export const ButtonGroup = styled.div`
  position: relative; /* Ensure relative positioning for ErrorSpan */
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  border-radius: 0.3125rem;
`;

export const NewButton = styled(Button)`
  width: 100% !important;
  background-color: ${({ $theme, $preset }) =>
    $preset === "delete" ? $theme.error : $theme.success} !important;
  color: ${({ $theme }) => $theme.text} !important;
  font-weight: 600 !important;
  font-size: 0.8rem !important;
`;
