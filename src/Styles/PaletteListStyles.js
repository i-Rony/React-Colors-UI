import sizes from './sizes';
import bg from './background.svg'

export default {

    "@global": {
        ".fade-exit": {
          opacity: 1
        },
        ".fade-exit-active": {
          opacity: 0,
          transition: "opacity 500ms ease-out"
        }
    },
    root: {
        background: "",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflowY: "scroll",
        /* background by SVGBackgrounds.com */
        backgroundColor: "#226daa",
        backgroundImage: `url(${bg})`
    },
    heading: {
        fontSize: "2rem"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width: "80%"
        },
        [sizes.down("xs")]: {
            width: "75%"
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
        "& a": {
            fontWeight: 500,
            color: "white",
            textDecoration: "none",
            fontFamily: "Roboto"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 50%)"
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1.5rem"
        }
    }
};
