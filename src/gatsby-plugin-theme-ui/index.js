export default {
  // colors: {
  //     background: '#222324',
  //     text: '#CF9655',
  //     primary: '#CF9655',
  //     modes: {
  //         watch: {
  //             background: '#222324',
  //             text: '#E7B996',
  //             primary: '#E7B996',
  //         },
  //         iphone: {
  //             background: '#E7B996',
  //             text: "#871003",
  //             primary: '#871003',
  //         },
  //         ipad: {
  //             background: '#871003',
  //             text: '#62A461',
  //             primary: '#62A461',
  //         },
  //         mac: {
  //             background: '#871003',
  //             text: '#62A461',
  //             primary: '#62A461',
  //         }
  //     }
  // },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif, SF-Pro-Display-Bold, SF-Pro-Display-Light, SF-Pro-Display-Semibold, SF Pro Display Medium',
    heading:
      "SF Pro Display Bold, SF Pro Display Light, SF Pro Display Semibold, SF Pro Display Medium",
  },
  fontSizes: [20, 35, 40, 15, 18, 28, 40, 60, 80],
  text: {
    headingBold: {
      fontFamily: "SF Pro Display Bold",
    },
    headingSemibold: {
      fontFamily: "SF Pro Display Semibold",
    },
    headingLight: {
      fontFamily: "SF Pro Display Light",
    },
    headingMedium: {
      fontFamily: "SF Pro Display Medium",
    },
    headingThin: {
      fontFamily: "SF Pro Display Thin",
    },
  },
  styles: {
    a: {
      textDecoration: "none",
      padding: 0,
      margin: 0,
      backgroundColor: "inherit",
      color: "inherit",
    },
    div: {
      padding: 0,
      margin: 0,
    },
    h1: {
      variant: "text.headingBold",
      fontSize: 6,
      padding: 0,
      margin: 0,
    },
    h2: {
      variant: "text.headingBold",
      fontSize: 2,
      padding: 0,
      margin: 0,
    },
    h3: {
      variant: "text.headingSemibold",
      fontSize: 2,
      padding: 0,
      margin: 0,
    },
    h4: {
      variant: "text.headingMedium",
      fontSize: 0,
      padding: 0,
      margin: 0,
    },
    h5: {
      variant: "text.headingLight",
      fontSize: 1,
      padding: 0,
      margin: 0,
    },
    h6: {
      variant: "text.headingThin",
      fontSize: 1,
      padding: 0,
      margin: 0,
    },
  },
  buttons: {
    primary: {
      bg: "background",
      color: "primary",
    },
  },
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 20, 35, 50, 5, 8, 10, 18, 23],
};
