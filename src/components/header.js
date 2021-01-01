/** @jsx jsx */
import { jsx, Styled, header } from "theme-ui";
import Logo from "./logo";
import Button from "./button";

export default function Header(props) {
  return (
    <header
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        variant: "styles.header",
      }}
    >
      <Logo theme={props.theme} />
      <Styled.div sx={{ mx: "auto" }} />
      <Button data={props.data} theme={props.theme} />
    </header>
  );
}
