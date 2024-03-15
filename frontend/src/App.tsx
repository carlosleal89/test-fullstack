import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditUser from './pages/EditUser';
import CreateUser from './pages/CreateUser';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/user/:id' component={ EditUser } />
        <Route exact path='/new-user' component={ CreateUser } />
      </Switch>
    </>
  );
}

export default App;
