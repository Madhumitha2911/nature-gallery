import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit
  }
});

class Page extends React.Component {
  render() {
    const facts = this.props.facts.map((fact, index) => (
      <li key={index}><Typography variant="body1" key={index}>{fact}</Typography></li>
    ));
    return (
      <main className={this.props.classes.root} key={this.props.key}>
        <Typography variant="headline" key={this.props.key}>{this.props.name}</Typography>
        <Typography variant="subheading" key={this.props.key}>Location:{this.props.location}</Typography>
        <Typography variant="body1" key={this.props.key}>About:{this.props.body}</Typography>
        <Typography variant="body1" key={this.props.key}>Facts:</Typography>
        <ul key={this.props.key}>
          {facts}
        </ul>
        <Button component={Link} to="/" variant="raised" color="primary" key={this.props.key}>Back To Home</Button>
      </main>
    );
  }
}

export default withStyles(styles)(Page);
