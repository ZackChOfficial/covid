import React from "react";
import AdviceCard from "./AdviceCard";
import useStyles from "./style";
import adviceData from "./data";

function Advices() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			{adviceData.map((data) => <AdviceCard logo={data.logo} text={data.text} />)}
		</div>
	);
}

export default Advices;
