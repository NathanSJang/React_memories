import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import Post from './Post/Post'
import useStyles from "./styles";

export default function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles();

  console.log(posts)
  
  return (
    <Grid>
      <Post />
    </Grid>
  )
}