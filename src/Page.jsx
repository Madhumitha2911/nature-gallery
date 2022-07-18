import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import MaterialUICard from '@material-ui/core/Card';

const styles = theme => ({
  root: {
    padding: '15px',
    width: '40%',
    margin: '50px auto',
  },
  text: {
    marginBottom: '10px'
  },
  image: {
    width: '65%',
    height: 'auto',
    margin: '30px auto',
    display: 'block'
  }
});

class Page extends React.Component {
  render() {
    const facts = this.props.facts.map((fact, index) => (
      <li key={index}><Typography variant="body1" key={index}>{fact}</Typography></li>
    ));
    return (
      <MaterialUICard className={this.props.classes.root} key={this.props.key}>
        <Typography className={this.props.classes.text} variant="headline" key={this.props.key}>{this.props.name}</Typography>
        <Typography className={this.props.classes.text} variant="subheading" key={this.props.key}><b>Location:  </b>{this.props.location}</Typography>
        <img className={this.props.classes.image} src={`${this.props.image}`}></img>
        <Typography className={this.props.classes.text} variant="body1" key={this.props.key}><b>About:  </b>{this.props.body}</Typography>
        <Typography className={this.props.classes.text} variant="body1" key={this.props.key}><b>Facts:</b></Typography>
        <ul key={this.props.key}>
          {facts}
        </ul>
        <Button component={Link} to="/" variant="raised" color="primary" key={this.props.key}>Back To Home</Button>
      </MaterialUICard>
    );
  }
}

export default withStyles(styles)(Page);
