import sizes from './sizes';

export default {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
    },
    Logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#ff7979",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "white",
        },
        [sizes.down("xs")]: {
            display: "none"
        }
    },
    Slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        [sizes.down("sm")]: {
            width: "150px"
        }
    },
    SelectContainer: {
        marginLeft: "auto",
        marginRight: "1rem",
    }
};