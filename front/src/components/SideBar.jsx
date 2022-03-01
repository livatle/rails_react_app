import React from "react";
import { useNavigate } from 'react-router-dom';
import { AuthButtons } from './index'
import { Icon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
        createStyles({
            drawer: {
                height: "100%",
                position: "fixed"
            },
            maxSize: {
                height: "100%",
                width: "100%"
            }
        }),
    );

const drawerWidth = 240;

const SideBar = () => {
    const navigate = useNavigate();
    const classes = useStyles();

    return (
             <Box
                className={classes.drawer}
                sx={{ width: drawerWidth, bgcolor: "#222A50"}}
            >
                 <MenuList>
                     <MenuItem sx={{mt: "40px"}}>
                        <Typography className={classes.maxSize}>
                            <Button
                                onClick={()=> navigate('/')}
                                sx={{color: "white", fontSize: "16px"}}
                                className={classes.maxSize}
                            >
                                <HomeIcon sx={{mr: "0.5em"}} />
                                FOOTHUB
                            </Button>
                        </Typography>
                     </MenuItem>
                    <MenuItem sx={{ mt: "40px", height: "80px"}}>
                        <Typography 
                        sx={{ borderRadius: "10em" }}
                        className={classes.maxSize}>
                            <Button
                                onClick={()=> navigate('/new')}
                                className={classes.maxSize}
                                variant="outlined"
                                sx={{ fontSize: "16px", borderRadius: "10em" }}
                            >
                                <CreateIcon sx={{mr: "0.5em"}} />
                                CREATE
                            </Button>
                        </Typography>
                    </MenuItem>
                    <AuthButtons/>
                </MenuList>
            </Box>
    )
}
export default SideBar