/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import { useState } from "react";

const buttonStyle = (isActive) => css`
  background-color: ${isActive ? "green" : "red"};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
`;

export default function ToggleButton() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Button css={buttonStyle(isActive)} onClick={() => setIsActive(!isActive)}>
      {isActive ? "Active" : "Inactive"}
    </Button>
  );
}
