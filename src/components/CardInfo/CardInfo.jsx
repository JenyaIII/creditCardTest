import React from "react";
import { Typography, Box } from "@material-ui/core";
import useStyles from "./Styles";

const CardInfo = ({ balance, nextPayment, lastPayment }) => {
  const classes = useStyles();
  const paymentBalance = balance.toLocaleString();

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography className={classes.cardInfo}>Balance</Typography>
        <Typography className={classes.cardInfoPayment}>
          ${paymentBalance}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography className={classes.cardInfo}>Next Payment</Typography>
        <Typography className={classes.cardInfoPayment}>
          ${nextPayment}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography className={classes.cardInfo}>Last Payment</Typography>
        <Typography className={classes.cardInfoPayment}>
          ${lastPayment}
        </Typography>
      </Box>
    </>
  );
};

export default CardInfo;
