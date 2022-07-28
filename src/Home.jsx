import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from './Card.jsx';
import model from './natureModel.jsx';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    padding: '0 300px 50px 300px'
  }
});

class Home extends React.Component {
  render() {
    const cards = model.map(panel => (
      <Card key={panel.name} image={panel.imageLink} title={panel.name} 
        route={panel.route} description={panel.about} location={panel.location}/>
    ));
    return (
      <main className={this.props.classes.root}>
        {cards}
      </main>
    );
  }
}

export default withStyles(styles)(Home);
