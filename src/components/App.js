import React from 'react';
import CategoriesList from './CategoriesList';
import NewToDoForm from './NewToDoForm';
import { Switch, Route, withRouter } from 'react-router-dom';
import './styles.css';
import Header from './Header';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path='/' render={()=><CategoriesList />} />
        <Route exact path='/new' render={()=><NewToDoForm />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    categoryList: state
  }
}

export default withRouter(connect(mapStateToProps)(App));
