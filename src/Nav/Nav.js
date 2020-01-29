import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav role="navigation">
                <Link to='/new-post'>New blog post</Link>
            </nav>
        </div>
    )
}

export default Nav;