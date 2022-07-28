import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  image: {
    width: '100%'
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.openDrawer = this.openDrawer.bind(this);
  }
  openDrawer() {
    this.setState({open: true});
  }
  render() {
    return (
      <div>
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="headline" color="inherit" className={this.props.classes.flex}>
              Nature's Gallery
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <img className={this.props.classes.image} src="https://raw.githubusercontent.com/Madhumitha2911/nature-gallery-images/main/banner-image.jpg" alt="banner"></img>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
