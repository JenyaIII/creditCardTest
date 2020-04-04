import React from "react";
import { Typography, Box } from "@material-ui/core";
import useStyles from "./Styles";

const Analytics = ({ interest, interestPaid, principal }) => {
  const classes = useStyles();

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography className={classes.interest}>Interest</Typography>
        <Typography className={classes.cardInfoPayment}>{interest}%</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography className={classes.cardInfo}>
          Interest: ${interestPaid}
        </Typography>
        <Typography className={classes.principal}>
          Principal: ${principal}
        </Typography>
      </Box>
    </>
  );
};

export default Analytics;
