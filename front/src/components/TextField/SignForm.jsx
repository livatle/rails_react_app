import React from "react";
import { NavLink } from 'react-router-dom';
//material-ui
import { Box, Button, TextField, Typography } from '@mui/material'
//coponent
import { AlertMessage } from '../Notification/index'
//style
import { submitButtonStyle } from "./Form";

export const formStyle = {
  '& div': {
    width: "80%"
  },
  '& .MuiInputBase-input': {
    color: '#ffffff'
  },
  '& label': {
    color: '#ffffff'
  },
  '& .MuiOutlinedInput-root': {
    mb: "2em",
    '& fieldset': {
      borderColor: '#ffffff'
    }
  },
}

const SignForm = (props) => {
  const {
    name,
    email,
    setName,
    setEmail,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
    alertMessageOpen,
    setAlertMessageOpen,
    handleSubmit,
    signType
  } = props;

  return (
    <div className="p-box">
      {signType === 'signUp' ? (
        <h2 className="p-text">
          SIGN UP
        </h2>) : (
        <h2 className="p-text">
          SIGN IN
        </h2>
        ) 
      }
      {signType === 'signUp' && (
        <TextField
          sx={formStyle}
          label="username"
          value={name} 
          onChange={event => setName(event.target.value)}
        />
      )}
        <TextField
          sx={formStyle}
          label="email"
          type="email" 
          value={email} 
          onChange={event => setEmail(event.target.value)}
        />
        <TextField
          sx={formStyle}
          label="password"
          type="password" 
          value={password} 
          onChange={event => setPassword(event.target.value)}
        />
        {signType === 'signUp' && (
          <TextField
            onChange={(event) =>
              setPasswordConfirmation(event.target.value)
            }
            sx={formStyle}
            variant='outlined'
            required
            label='Password Confirmation'
            type='password'
            value={passwordConfirmation}
            autoComplete='current-password'
          />
        )}
        <Button
          sx={submitButtonStyle}
          variant="outlined"
          type="subimit" 
          onClick={handleSubmit} 
        >
            subimit
        </Button>
        {signType === 'signIn' && (
          <Box sx={{mt: "4em"}}>
            <Typography variant='body2'>
              <small className="c-text__item">Don't have an account? &nbsp;</small> 
              <NavLink 
                to='/signup'
              >
                <small className="c-text">Sign Up now!</small> 
              </NavLink>
            </Typography>
          </Box>
        )}
        <AlertMessage
          open={alertMessageOpen}
          setOpen={setAlertMessageOpen}
          severity="error"
          message="wrong email or password"
        />
      </div>
  )
}

export default SignForm