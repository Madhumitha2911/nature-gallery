import { Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    root : {
        bottom: 0,
        left: 0,
        backgroundColor: "#237606",
        position: 'fixed',
        width: '100%',
        padding: '20px'
        
    },
    text: {
        margin: 'auto'
      }
  });

class Footer extends React.Component {

      render() {

        return (
            <Toolbar class={this.props.classes.root}>
                <Typography variant='caption' class={this.props.classes.text}>Created by Madhumitha</Typography>
            </Toolbar>
        );

      }
}


export default withStyles(styles)(Footer);