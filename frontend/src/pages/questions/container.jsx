import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
	margin: "0 5rem",
	paddingTop: "200px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
	fontWeight: theme.typography.fontWeightRegular,
	textAlign: "right"
  }
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
			align="right"
        >
		<div style={{display: "flex", flexDirection: "row-reverse", border: "2px solide red"}}>
          <Typography className={classes.heading}>Expansion Panel 1</Typography>
		  </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography align="right">
		  غسل اليدين جيدا بالماء والصابون بانتظام ولمدة لا تقل عن 20 ثانية، او استعمال المعقمات الكحولية
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Expansion Panel 2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
