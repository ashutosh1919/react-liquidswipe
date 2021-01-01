import * as React from "react";
import { graphql } from "gatsby";
import { LiquidSwipe } from "../components/liquidswipe";
import { DevicePage } from "../components/DevicePage";
import { Colors } from "../components/colors";

export const query = graphql`
  query {
    allPagesDataJson {
      edges {
        node {
          title
          subtitle
          buttonLink
          buttonText
          caption
          id
          imageOriginalName
        }
      }
    }
    allImageSharp {
      edges {
        node {
          fixed {
            src
            originalName
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
    allDataJson {
      edges {
        node {
          github
          behance
          dribble
        }
      }
    }
  }
`;

function extractPage(allData, id) {
  var dataNode, imageNode, conceptNode;
  for (var i = 0; i < allData["allPagesDataJson"]["edges"].length; i++) {
    if (allData["allPagesDataJson"]["edges"][i]["node"]["id"] === id) {
      dataNode = allData["allPagesDataJson"]["edges"][i]["node"];
      break;
    }
  }
  for (var j = 0; j < allData["allImageSharp"]["edges"].length; j++) {
    if (
      allData["allImageSharp"]["edges"][j]["node"]["fixed"]["originalName"] ===
      dataNode["imageOriginalName"]
    ) {
      imageNode = allData["allImageSharp"]["edges"][j]["node"];
      break;
    }
  }
  conceptNode = allData["allDataJson"]["edges"][0]["node"];
  return { data: dataNode, image: imageNode, concept: conceptNode };
}

const IndexPage = ({ data }) => {
  const ids = ["airpod", "watch", "iphone", "ipad", "mac", "mouse"];
  var componentsToRender = [];
  var backgroundColors = [];
  for (var i = 0; i < ids.length; i++) {
    componentsToRender.push(<DevicePage data={extractPage(data, ids[i])} />);
    backgroundColors.push(Colors[ids[i]]["background"]);
  }
  return (
    <>
      <LiquidSwipe components={componentsToRender} colors={backgroundColors} />
    </>
  );
};

export default IndexPage;
