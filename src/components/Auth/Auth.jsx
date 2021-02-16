import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { signin, signup } from '../../utilities/redux/actions/auth';
import LockOoutLinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import Icon from './Icon';
import useStyles from "./styles";

const initialState = {
  firstName: '', lastName: '', email: '', password: '', confirmPassword: '',
};

export default function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    if(isSignup) {
      dispatch(signup(formData, history))
    } else {
      dispatch(signin(formData, history))
    }
  };

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  function handleShowPassword() {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  };

  function switchMode() {
    setIsSignup((preIsSignup) => !preIsSignup)
    setShowPassword(false);
  };

  async function googleSuccess(res) {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  };

  function googleFailure(error) {
    console.log(error)
    console.log("Google Sign In was unsuccessful. Try Again");
  };

  return(
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOoutLinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input 
                  name="firstName" 
                  label="First name" 
                  handleChange={handleChange}
                  autoFocus
                  half
                  />
                  <Input 
                  name="lastName" 
                  label="Last name" 
                  handleChange={handleChange}
                  autoFocus
                  half
                  />
                </>
              )}
              <Input 
                name="email" 
                label="Email Address" 
                handleChange={handleChange} 
                type="email" 
              />
              <Input 
                name="password" 
                label="password"
                handleChange={handleChange} 
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
              { isSignup && 
                <Input 
                  name="confirmPassword" 
                  label="Repeat Password" 
                  handleChange={handleChange}
                  type="password"
                />
              }
          </Grid>
          <Button 
            type="submit" 
            fullWidth 
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            { isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId="977731976359-clim2hkurehvqapc68rhmcsju3bchfhp.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button 
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an accout? Sign In' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}