import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

//
import {
  //BrowserRouter,
  //Route,
  Link
} from 'react-router-dom'
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
 });



const HomeLink = props => <Link to="/" {...props} />
const EditorLink = props => <Link to="/editor" {...props} />
const TopicsLink = props => <Link to="/topics" {...props} />
const LoginLink = props => <Link to="/login" {...props} />
const RegisterLinks = props => <Link to="/register" {...props} />




class Home extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);



   return (
  <div className={classes.root}>
       <FormGroup>
         <FormControlLabel
           control={
             <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
           }
           label={auth ? 'Logout' : 'Login'}
         />
       </FormGroup>
       <AppBar position="static">

         <Toolbar>



           <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
             <MenuIcon />
           </IconButton>

           <Typography variant="title" color="inherit" className={classes.flex}>
             Material React Coding Space
           </Typography>

           {auth && (
             <div>

             {/* Home Link */}
             <Button component={HomeLink} variant="outlined" className={classes.button}>
               Home
             </Button>

            {/* Editor Link */}
             <Button component={EditorLink} variant="outlined" className={classes.button}>
              Code Editor
             </Button>

           {/* Topics Link */}
            <Button component={TopicsLink} variant="outlined" className={classes.button}>
             Topics
            </Button>

               <IconButton
                 aria-owns={open ? 'menu-appbar' : null}
                 aria-haspopup="true"
                 onClick={this.handleMenu}
                 color="inherit"
               >
                 <AccountCircle />
               </IconButton>

               <Menu
                 id="menu-appbar"
                 anchorEl={anchorEl}
                 anchorOrigin={{
                   vertical: 'top',
                   horizontal: 'right',
                 }}
                 transformOrigin={{
                   vertical: 'top',
                   horizontal: 'right',
                 }}
                 open={open}
                 onClose={this.handleClose}
               >

               {/* Login Link */}
                <MenuItem
                onClick={this.handleClose}
                component={LoginLink}
                >
                Login
               </MenuItem>

              {/* Register Link */}
               <MenuItem
                  onClick={this.handleClose}
                  component={RegisterLinks}
                >Register</MenuItem>

               </Menu>
             </div>
           )}
         </Toolbar>
       </AppBar>
     </div>
   );
 }
}


Home.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Home));