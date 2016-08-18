import React from 'react';
import { Link } from 'react-router';

const PageHeader = () => (
    <div className = "fizbone-page-header">
        <div className = "container">
            <Link to='/'> Home </Link>
            <Link to="/about"> About </Link>
        </div>
    </div>
);

export default PageHeader;
