import React from 'react';
import ToDoList from './ToDoList';
import NewToDoForm from './NewToDoForm';
import { Switch, Route } from 'react-router-dom';
import './styles.css';
import Header from './Header'

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path='/' render={()=><ToDoList />} />
        <Route exact path='/new' render={()=><NewToDoForm />} />
      </Switch>
    </div>
  );
}

export default App;
