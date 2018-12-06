import React, { Component } from 'react';
import Home from './components/Home';
import AllTodos from './components/AllTodos';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/allTodos' component={AllTodos} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
