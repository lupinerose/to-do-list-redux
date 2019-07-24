import React from 'react';
import PropTypes from 'prop-types';

function Category(props) {

    function handleRedirectToDetail(categoryId) {
        console.log(categoryId)
    }
    
  return (
    <div>
        <h3 onClick={() => handleRedirectToDetail(props.categoryId)}>- {props.name}</h3>
    </div>
  );
}

export default Category;

Category.propTypes = {
    name: PropTypes.string,
    categoryId: PropTypes.string
}
