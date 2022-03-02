import React from "react";
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export const formStyle = {
  '& div': {
    width: "80%",
  },
  '& .MuiInputBase-input': {
    color: 'white'
  },
  '& label': {
    color: 'white'
  },
  '& .MuiOutlinedInput-root': {
    mb: "2em",
    '& fieldset': {
      borderColor: 'white'
    }
  },
}
const drawerWidth = 240;

const SignForm = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        signType,
        name,
        setName,
        passwordConfirmation,
        setPasswordConfirmation,
    } = props;

    return (
        <div className="post-box">
        {signType === 'signUp' ? (
          <h2 className="c-text">
            SIGN UP
          </h2>) : (
          <h2 className="c-text">
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
              sx={formStyle}
              variant='outlined'
              required
              label='Password Confirmation'
              type='password'
              value={passwordConfirmation}
              autoComplete='current-password'
              onChange={(event) =>
                setPasswordConfirmation(event.target.value)
              }
            />
          )}
          <Button
            sx={{ width: "80%", p: "1em", borderRadius: "10em" }}
            variant="outlined"
            type="subimit" 
            onClick={handleSubmit} 
          >
              subimit
          </Button>
          {signType === 'signIn' && (
            <Box sx={{mt: "4em"}}>
              <Typography variant='body2'>
                <small className="u-text">Don't have an account? &nbsp;</small> 
                <NavLink 
                  to='/signup'
                >
                  <small className="c-text">Sign Up now!</small> 
                </NavLink>
              </Typography>
            </Box>
          )}
          </div>
    )
}

export default SignForm