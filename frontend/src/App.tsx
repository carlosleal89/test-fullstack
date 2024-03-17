import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditUser from './pages/EditUser';
import CreateUser from './pages/CreateUser';
import Header from './components/Header';
import './App.css';
import userIcon from './images/user_icon.svg';

function App() {
  return (
    <div>
      <Header />
        <div className="lg:ml-5 lg:mr-5 mt-20 xl:ml-40 xl:mr-40">
          <div className="flex">
            <img src={ userIcon } alt="user icon" id="user-icon" className="mr-5 w-10" />
            <h1 className="font-bold text-[2rem]">Painel de Clientes</h1>
          </div>
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
