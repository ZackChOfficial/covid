import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import questionsData from "./data";

const useStyles = makeStyles(theme => ({
	root: {
		margin: "0 5rem",
		paddingTop: "200px"
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
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
								<Typography className={classes.heading}>{q.question}</Typography>
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
