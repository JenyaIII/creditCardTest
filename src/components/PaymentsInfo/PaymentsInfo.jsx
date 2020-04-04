import React from "react";
import { Typography, Box, Chip, Button } from "@material-ui/core";
import useStyles from "./Styles";

const PaymentsInfo = ({ paymentMade, nextPaymentDate }) => {
  const classes = useStyles();
  const date = new Date(nextPaymentDate);

  return (
    <>
      <Box display="flex" justifyContent="space-around">
        <Typography className={classes.interest}>Next Payment</Typography>
        <Typography className={classes.cardInfoPayment}>
          {date.toDateString().slice(3)}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-around">
        {paymentMade ? (
          <div className={classes.paymentStatus}>
            <Chip size="small" label="Paid" className={classes.chipPaid} />
          </div>
        ) : (
          <div className={classes.paymentStatus}>
            <Chip size="small" label="Unpaid" color="secondary" />
          </div>
        )}
        <Button variant="contained" color="primary">
          Make Payment
        </Button>
      </Box>
    </>
  );
};

export default PaymentsInfo;
