import React from "react";
import useStyles from "./style";

export default function AdviceCard(props)
{
	const classes = useStyles();
	return (
		<div className={classes.card}>
			<img className={classes.cardImg} src={props.logo} alt="hand washing logo"/>
			<h3 className={classes.cardText}>
				{props.text}
			</h3>
		</div>
	);
}
