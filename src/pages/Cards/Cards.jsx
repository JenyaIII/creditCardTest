import React, { useContext } from "react";
import { Paper, Grid } from "@material-ui/core";
import { CardContext } from "../../context/CardContext";
import useStyles from "./Styles";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import CardInfo from "../../components/CardInfo/CardInfo";
import Analytics from "../../components/Analytics/Analytics";
import PaymentsInfo from "../../components/PaymentsInfo/PaymentsInfo";
import CardLogo from "../../components/CardLogo/CardLogo";

export default function Cards() {
  const classes = useStyles();
  const { cardData } = useContext(CardContext);

  return (
    <>
      {cardData.map(item => (
        <Paper className={classes.paper} key={item.balance}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} md={2} lg={2}>
              <CardLogo cardImage={item.cardImage} cardName={item.cardName} />
            </Grid>

            <Grid alignItems="center" container xs={12} sm={9} md={10} lg={10}>
              <Grid item xs={10} sm={11}>
                <ProgressBar barMax={item.barMax} barPaid={item.barPaid} />
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <CardInfo
                  balance={item.balance}
                  nextPayment={item.nextPayment}
                  lastPayment={item.lastPayment}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <Analytics
                  interest={item.interest.apr}
                  interestPaid={item.interest.interestPaid}
                  principal={item.interest.principal}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={6}>
                <PaymentsInfo
                  paymentMade={item.paymentMade}
                  nextPaymentDate={item.nextPaymentDate}
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </>
  );
}
