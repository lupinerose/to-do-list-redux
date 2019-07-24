import React from 'react';
import CategoriesList from './CategoriesList';
import NewCategoryForm from './NewCategoryForm';
import Category from './Category';
import { Switch, Route, withRouter } from 'react-router-dom';
import './styles.css';
import Header from './Header';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function App(props) {
  console.log(props.location.pathname);
  
  return (
    <div className="container">
      <Header currentRouterPath={props.location.pathname}/>
      <Switch>
        <Route exact path='/' render={()=><CategoriesList categoryList={props.categoryList}/>} />
        <Route exact path='/new-category' render={()=><NewCategoryForm />} />
        <Route path='/categories/:categoryName' render={()=><Category />}/>
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

App.propTypes = {
  categoryList: PropTypes.object
}