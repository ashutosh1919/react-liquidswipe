import React from "react";
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaBehance } from "@react-icons/all-files/fa/FaBehance";
import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble";
import styled from "styled-components";

const Footer = ({ data, theme }) => {
  return (
    <Styled.div
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        bottom: "0px",
        display: "flex",
        flexDirection: "column",
        mb: [10, 20],
        mt: 20,
      }}
    >
      <Styled.h5
        sx={{
          opacity: 0.7,
          fontSize: [3, 3, 4],
          color: theme["primary"],
        }}
      >
        See The Full Concept
      </Styled.h5>
      <Styled.div
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Styled.a
          href={data["concept"]["github"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            sx={{
              fontSize: 5,
              opacity: 0.7,
              m: 10,
              "@keyframes glow": {
                from: { opacity: 0.7 },
                to: { opacity: 1 },
              },
              "@keyframes glowRev": {
                from: { opacity: 1 },
                to: { opacity: 0.7 },
              },
              animationName: "glowRev",
              animationDuration: "0.7s",
              "&:hover": {
                animation: "glow 0.7s ease forwards",
              },
              color: theme["primary"],
            }}
          />
        </Styled.a>
        <Styled.a
          href={data["concept"]["behance"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance
            sx={{
              fontSize: 5,
              opacity: 0.7,
              m: 10,
              "@keyframes glow": {
                from: { opacity: 0.7 },
                to: { opacity: 1 },
              },
              "@keyframes glowRev": {
                from: { opacity: 1 },
                to: { opacity: 0.7 },
              },
              animationName: "glowRev",
              animationDuration: "0.7s",
              "&:hover": {
                animation: "glow 0.7s ease forwards",
              },
              color: theme["primary"],
            }}
          />
        </Styled.a>
        <Styled.a
          href={data["concept"]["dribble"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDribbble
            sx={{
              fontSize: 5,
              opacity: 0.7,
              m: 10,
              "@keyframes glow": {
                from: { opacity: 0.7 },
                to: { opacity: 1 },
              },
              "@keyframes glowRev": {
                from: { opacity: 1 },
                to: { opacity: 0.7 },
              },
              animationName: "glowRev",
              animationDuration: "0.7s",
              "&:hover": {
                animation: "glow 0.7s ease forwards",
              },
              color: theme["primary"],
            }}
          />
        </Styled.a>
      </Styled.div>
    </Styled.div>
  );
};

export default Footer;
