import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Pages from './Pages.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx'

const primary = '#237606';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
      contrastText: '#fff'
    },
    secondary: {
      main: '#000000',
      contrastText: primary
    }
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchUnknown(1500);
  }
  searchUnknown(duration) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + duration) {
    //  do something
    }
  }
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/aurora" component={Pages['Aurora']}/>
            <Route path="/mount-everest" component={Pages['Mount Everest']}/>
            <Route path="/great-barrier-reef" component={Pages['Great Barrier Reef']}/>
            <Route path="/grand-canyon" component={Pages['Grand Canyon']}/>
            <Route path="/jeju-island" component={Pages['Jeju Island']}/>
            <Route path="/guanabara-bay" component={Pages['Guanabara Bay']}/>
            <Footer/>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
