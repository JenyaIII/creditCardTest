import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  interest: {
    fontSize: "14px",
    opacity: 0.8,
    color: "grey",
    paddingBottom: "6px",
    paddingLeft: "15px"
  },

  cardInfoPayment: {
    fontSize: "16px",
    paddingBottom: "6px"
  },

  chipPaid: {
    background: "green",
    opacity: 0.6,
    color: "white"
  },

  paymentStatus: {
    paddingLeft: "28px"
  }
}));

export default useStyles;
