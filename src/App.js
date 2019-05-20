import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import NavbarCom from './components/Navbar';

import { Provider } from 'react-redux';
import { configureStore } from './redux/store';

import login from './routes/login';
import home from './routes/home';
import list from './routes/list';
import error from './routes/error';
import { Container } from 'reactstrap';
import './styles.css'

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path='/' component={login} />
            <React.Fragment>
              <NavbarCom />
              <Container>
              <Switch>
                <Route path='/home' component={home} />
                <Route path='/list' component={list} />
                <Route path='/error' component={error} />
                <Redirect to='/error'/>
              </Switch>
              </Container>
            </React.Fragment>
          </Switch>
        </div>
      </Router>
      </Provider>
    );
  };
}

export default App;
