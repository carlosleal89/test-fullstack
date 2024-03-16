import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditUser from './pages/EditUser';
import CreateUser from './pages/CreateUser';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="mt-20 ml-40 mr-40">
        <h1 className="font-bold text-[2rem]">Painel de Clientes</h1>
        <div className="mt-10 border-b"></div>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/user/:id' component={ EditUser } />
          <Route exact path='/new-user' component={ CreateUser } />
        </Switch>
      </div>
    </div>
  );
}

export default App;
