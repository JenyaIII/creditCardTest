import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: "20px",
    marginTop: "20px",
    maxWidth: 1200,
    borderRadius: "12px",
    boxShadow: "10px 10px 20px #8f989a, -10px -10px 20px #d1e0e2"
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "0",
    display: "block",
    maxWidth: "35%",
    maxHeight: "100%"
  }
}));

export default useStyles;
