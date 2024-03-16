import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditUser from './pages/EditUser';
import CreateUser from './pages/CreateUser';
import Header from './components/Header';

function App() {
  return (
    <div className="main_container">
      <Header />
      <h1>Painel de Clientes</h1>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/user/:id' component={ EditUser } />
        <Route exact path='/new-user' component={ CreateUser } />
      </Switch>
    </div>
  );
}

export default App;
