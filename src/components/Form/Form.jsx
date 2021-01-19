import { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core'

import  useStyles  from "./styles";

export default function Form() {
  const classes = useStyles();

  return(
    <Paper className={classes.paper}>
      <h1>From</h1>
    </Paper>
  );
}