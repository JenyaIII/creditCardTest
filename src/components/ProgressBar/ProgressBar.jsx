import React, { useEffect, useState } from "react";
import { Typography, LinearProgress, Box } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./Styles";

const ProgressBar = ({ barPaid, barMax }) => {
  const classes = useStyles();
  const paidProgress = barPaid.toLocaleString();
  const maxPaidProgress = barMax.toLocaleString();
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setCompleted((barPaid * 100) / barMax);
  }, [completed]);

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <LinearProgress
          variant="determinate"
          value={completed}
          className={classes.progressBar}
        />
        <div className={classes.menuIconBox}>
          <MoreHorizIcon className={classes.menuIcon} />
        </div>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography color="primary" variant="body2">
          ${paidProgress}
        </Typography>
        <Typography className={classes.maxBarPaid} variant="caption">
          Paid of ${maxPaidProgress}
        </Typography>
      </Box>
    </>
  );
};

export default ProgressBar;
