import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import questionsData from "./data";

const useStyles = makeStyles(theme => ({
	root: {
		padding: "200px 5rem",
		[theme.breakpoints.down("sm")]: {
			padding: "7rem 0"
		}
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
		width: "100%"
	}

}));

export default function SimpleExpansionPanel() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{
				questionsData.map(q => (
					<ExpansionPanel>
						<ExpansionPanelSummary>
							<div className={classes.question} >
								<Typography variant="h1" className={classes.heading}>{q.question}</Typography>
							</div>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<div className={classes.question} >
								<Typography align="right">
									{q.answer}
								</Typography>
							</div>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				))
			}
		</div >
	);
}
