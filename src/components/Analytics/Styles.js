import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  img: {
    padding: theme.spacing(1),
    margin: "0",
    display: "block",
    maxWidth: "65%",
    maxHeight: "100%"
  },
  interest: {
    fontSize: "14px",
    opacity: 0.8,
    color: "grey",
    paddingBottom: "6px",
    paddingLeft: "15px"
  },
  cardInfo: {
    fontSize: "12px",
    opacity: 0.8,
    color: "grey",
    paddingBottom: "6px",
    paddingLeft: "15px"
  },
  cardInfoPayment: {
    fontSize: "12px",
    paddingBottom: "6px"
  },
  principal: {
    fontSize: "12px",
    opacity: 0.8,
    color: "grey",
    paddingBottom: "6px"
  }
}));

export default useStyles;
