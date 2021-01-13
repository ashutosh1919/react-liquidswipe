/** @jsx jsx */
import { useState } from "react";
import { jsx, Styled } from "theme-ui";

export default function Button(props) {
  const background = props.theme["background"];
  const primary = props.theme["primary"];
  return (
    <Styled.a
      href={props.data["data"]["buttonLink"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Styled.div
        sx={{
          cursor: "pointer",
          m: 0,
          py: [6],
          px: [7, 8],
          border: "1px solid " + primary,
          borderRadius: 20,
          backgroundColor: primary,
          "@keyframes fadeInDivRev": {
            from: {
              backgroundColor: background,
            },
            to: {
              backgroundColor: primary,
            },
          },
          "@keyframes fadeInDiv": {
            from: {
              backgroundColor: primary,
            },
            to: {
              backgroundColor: background,
            },
          },
          "@keyframes fadeInTextRev": {
            from: {
              color: primary,
            },
            to: {
              color: background,
            },
          },
          "@keyframes fadeInText": {
            from: {
              color: background,
            },
            to: {
              color: primary,
            },
          },
          animationName: "fadeInDivRev",
          animationDuration: "0.7s",
          "#buttonText": {
            animationName: "fadeInTextRev",
            animationDuration: "0.7s",
          },
          "&:hover": {
            animation: "fadeInDiv 0.7s ease forwards",
          },
          "&:hover #buttonText": {
            animation: "fadeInText 0.7s ease forwards",
          },
        }}
      >
        <Styled.h5
          id="buttonText"
          sx={{
            fontSize: [3, 3, 4],
            color: background,
          }}
        >
          {props.data["data"]["buttonText"]}
        </Styled.h5>
      </Styled.div>
    </Styled.a>
  );
}
