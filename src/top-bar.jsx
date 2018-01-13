import React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import './top-bar.css'

const TopBar = () => {
    return (
        <AppBar position="fixed" color="inherit" >
            <Toolbar>
                <Typography type="title" color="inherit">
                    <span className="title-green">Dayo</span> <span className="title-rose"> Life </span>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}


export default TopBar;