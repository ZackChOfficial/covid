import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "60px 5%",
    [theme.breakpoints.down("sm")]: {
      padding: "5rem 5%"
    },
    width: "90%",
    float: "right"
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightBold,
    textAlign: "right"
  },
  question: {
    display: "flex",
    flexDirection: "row-reverse",
    border: "2px solide red",
    width: "100%",
    color: "#57616a"
  }
}));

export default useStyles;
