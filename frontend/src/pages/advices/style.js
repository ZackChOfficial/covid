import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: {
		paddingTop: "2rem",
		padding: "4rem",
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
		boxShadow: "3px 3px 7px rgba(0, 0, 0, 0.25)",
		borderRadius: "15px",
		margin: "1rem",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		"&:hover": {
			boxShadow: "5px 5px 10px rgba(0, 0, 100, 0.25)",
			transform: "scale(1.03) translate(-3px, -2px)"
		}

	},
	cardImg: {
		//paddingTop: "4rem",
		width: "50%",
		display: "block",
		margin: " 10% auto"
	},
	cardText: {
		textAlign: "right",
		margin: "10%"
	}
}));

export default useStyles;
