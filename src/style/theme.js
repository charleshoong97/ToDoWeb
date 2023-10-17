export const theme = {
  breakpoints: ["481px", "1025px", "2560px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6",
    disable: "#d4d4d4",
  },
  layout: {
    container: {
      maxWidth: ["90%", "90%", 800, 1025],
      py: "1px",
    },
  },
  forms: {
    input: {
      "&:disabled": {
        backgroundColor: "disable",
      },
    },
    select: {
      "&:disabled": {
        backgroundColor: "disable",
      },
    },
    checkbox: {
      color: "orange",
      "input:focus ~ &": {
        outline: "transparent",
        color: "orange",
        background: "transparent",
      },
      "input:checked ~ &": {
        outline: "transparent",
        color: "orange",
      },
    },
    radio: {
      "input:focus ~ &": {
        // bg: "transparent",
      },
      "> path": {},
      "input:checked ~ &": {
        "> path": {},
      },
    },
  },
  styles: {
    root: {
      // display: "flex",
      // height: "100vh",
      width: "100vw",
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "black",
      textDecoration: "unset",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
  buttons: {
    primary: {
      backgroundColor: "#27ccb0",
      cursor: "pointer",
      transition: "transform .2s",
      "&:disabled": {
        backgroundColor: "grey",
      },
      "&:hover": {
        scale: 1.2,
        transform: "scale(1.05)",
      },
    },
  },
};
