import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./Styles";

const CardLogo = ({ cardName, cardImage }) => {
  const classes = useStyles();
  return (
    <>
      <Box maxWidth={300}>
        <Typography
          gutterBottom
          variant="subtitle1"
          className={classes.cardName}
        >
          {cardName}
        </Typography>
        <div>
          <img className={classes.cardImage} alt="complex" src={cardImage} />
        </div>
      </Box>
    </>
  );
};

export default CardLogo;
