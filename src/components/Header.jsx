import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
    return (
        <div className="center">
            <h1>To Do List</h1>
            <hr/>
            <Link to="/">Home</Link> | <Link to="/new-category">New Category</Link>
        </div>
    )
}