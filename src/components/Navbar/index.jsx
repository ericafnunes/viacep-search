import React from 'react';
import useStyles from './style';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



 function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar} >
                    <Typography variant="h6" noWrap className={classes.title}>
                        CONSULTA CEP
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;