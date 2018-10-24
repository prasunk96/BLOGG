import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  grow: {
    flexGrow: 1,
    fontFamily: 'Comfortaa',
    fontSize: '1.5em',
    color: 'white'
},
growSecond: {
    fontFamily: 'Baloo Bhaina',
},
bgColor: {
    background: 'linear-gradient(to right, #4568DC, #B06AB3)',
    // borderBottom: '2px solid rgba(106, 0, 168, 0.9)'
}
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bgColor}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.grow}>
            Creators<span className={classes.growSecond}>Hub</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
