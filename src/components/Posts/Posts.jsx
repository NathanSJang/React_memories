import { Grid, CircularProgress } from "@material-ui/core";

import Post from './Post/Post'
import useStyles from "./styles";

export default function Posts() {
  const classes = useStyles();
  
  return (
    <Grid>
      <Post />
    </Grid>
  )
}