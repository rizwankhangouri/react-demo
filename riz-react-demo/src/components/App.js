import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//Resources
import logo from '../images/logo.svg';
import '../content/App.css';
import { history } from '../history';

//Ading Component
import  Home from './Home';
import  Login from './shared/Login';
import  Register  from './shared/Register';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router history={history}>                    
                    <div>                     
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        
                    </div>
                </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state||{};
  return {
      alert
  };
}


export default connect(mapStateToProps)(App);
