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
        padding: '10px'
        
    },
    text: {
        margin: 'auto'
      }
  });

class Footer extends React.Component {

      render() {

        return (
            <div className={this.props.classes.root}>
                <Typography variant='subheading' className={this.props.classes.text}>Created by Madhumitha</Typography>
            </div>
        );

      }
}


export default withStyles(styles)(Footer);