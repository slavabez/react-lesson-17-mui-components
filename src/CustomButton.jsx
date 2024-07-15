/** @jsxImportSource @emotion/react */

import { styled } from "@mui/system";
import { css } from "@emotion/react";

export const CustomButtonCssInJS = styled("button")({
  backgroundColor: "red",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
});

const buttonStyle = css`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
`;

export const CustomButtonEmotion = () => {
  return <button css={buttonStyle}>Emotion button</button>;
};
