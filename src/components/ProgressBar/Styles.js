import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  },

  maxBarPaid: {
    fontSize: "10px",
    opacity: 0.8,
    color: "grey"
  },

  menuIcon: {
    cursor: "pointer",
    background: "transparent",
    borderRadius: "8px",
    transition: "0.3s",
    "&:hover": {
      transition: "0.3s",
      background: "#0000001c"
    }
  },

  menuIconBox: {
    paddingLeft: "15px"
  },

  progressBar: {
    width: "100%"
  }
}));

export default useStyles;
