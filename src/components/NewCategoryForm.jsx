import React from 'react';
import { connect } from 'react-redux'

function NewCategoryForm() {

    function handleFormSubmission() {
        
    }

    return (
        <div>
            <form onSubmit={handleFormSubmission}>
                <label
                    type="text"
                    id="name"
                >Category Name</label>
                <input
                    type="text"
                    id="name"
                    ref={(input) => { _name = input }} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default connect()(NewCategoryForm);