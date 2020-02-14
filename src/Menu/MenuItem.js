import React from 'react';
import { Link } from 'react-router-dom';

function MenuItem(props) {
    return(
    <li><Link to={`/blog-post/${props.article.id}`}>{props.article.title}</Link></li>
    )
}

export default MenuItem;