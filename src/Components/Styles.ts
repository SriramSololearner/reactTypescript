export const StyleSheet = {
    // NAvbar

    navBar: {
        width: "100%",
        gap: { xs: 5, sm: 5 },
        py: { xs: "10px", sm: "10px", lg: "10px" },
        mx: { xs: "20px", sm: "0px", },
        visiblity: { xs: "scroll", md: "hidden" },
        overflow: { xs: "scroll", md: "hidden" },
        display: "flex",
        justifyContent: { xs: "flex-start", md: "space-around", },
    },
    accordion: {
        width: { xs: "105%", sm: "65%", md: "100%", lg: "100%" },
        display: "flex",
        justifyContent: "center",

    },
    accordionItem: {
        display: "flex",
        mx: "5px",
        my: "10px",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        background: "#4085f5",
        transition: "all 0.5s ease-in-out "
    },
    accordionItemContent: {
        fontSize: "15px",
        fontWeight: 600,
        color: "#0763f7",
        my: "20px",
        textAlign: "justify",
        mx: "25px",
        transition: "all 5s ease-in-out ",
    },

    accordionItemHeader: {
        width: "100%",
        fontSize: "20px",
        fontWeight: "600",
        my: "10px",
        py: "10px",
        px: "20px",
        color: "white",
        textAlign: "start",
        background: "#4085f5",
    },
    boxArrow: {
        mr: "20px",
        color: "white"
    },
    arrow: {}

}