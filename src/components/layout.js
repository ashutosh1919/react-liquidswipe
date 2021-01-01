import "./layout.css";
/** @jsx jsx */
import { jsx } from "theme-ui";

const Layout = ({ children, theme }) => {
  return (
    <div
      sx={{
        pl: [1, 2, 3],
        pr: [1, 2, 3],
        pt: [1, 2, 3],
        pb: 1,
        display: "flex",
        flexDirection: "column",
        // minHeight: '100vh',
        height: "100%",
        width: "100%",
        bg: theme["background"],
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
