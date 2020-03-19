import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: "2rem",
    width: "90%",
    margin: "0 5%",
    float: "left",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 0.5rem"
    }
  },
  card: {
    width: "400px",
    height: "600px",
    background: "#FFF",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "15px",
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    transition: "all .2s",
    "&:hover": {
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.07)",
      border: "2px solid #01a3a4",
      width: "390px",
      height: "590px"
    }
  },
  cardImg: {
    //paddingTop: "4rem",
    width: "50%",
    display: "block",
    margin: " 10% auto"
  },
  cardText: {
    textAlign: "center",
    margin: "10%",
    color: "#57616a",
    fontSize: "22px"
  }
}));

export default useStyles;
