import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  img: {
    padding: theme.spacing(1),
    margin: "0",
    display: "block",
    maxWidth: "65%",
    maxHeight: "100%"
  },
  cardInfo: {
    fontSize: "15px",
    opacity: 0.8,
    color: "grey",
    paddingBottom: "6px"
  },
  cardInfoPayment: {
    fontSize: "15px",
    paddingBottom: "6px"
  }
}));

export default useStyles;
