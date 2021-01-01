import React from "react";
import Layout from "./layout";
import Header from "./header";
import Showcase from "./showcase";
import Footer from "./footer";
import { Colors } from "./colors";

export const DevicePage = ({ data }) => {
  // console.log(data["data"]["id"]);
  // const [colorMode, setColorMode] = useColorMode();
  // setColorMode(data["data"]["id"]);
  const selectedColor = Colors[data["data"]["id"]];
  return (
    <>
      <Layout theme={selectedColor}>
        <Header data={data} theme={selectedColor} />
        <Showcase data={data} theme={selectedColor} />
        <Footer data={data} theme={selectedColor} />
      </Layout>
    </>
  );
};
