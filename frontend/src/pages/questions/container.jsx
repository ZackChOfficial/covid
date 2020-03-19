import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import questionsData from "./data";
import useStyles from "./style";

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {questionsData.map(q => (
        <ExpansionPanel>
          <ExpansionPanelSummary>
            <div className={classes.question}>
              <Typography variant="h1" className={classes.heading}>
                {q.question}
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classes.question}>
              <Typography align="right">{q.answer}</Typography>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}
