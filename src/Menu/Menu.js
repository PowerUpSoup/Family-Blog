import React from 'react';
import MenuItem from './MenuItem'




function Menu(props) {
    const name = props.name;
    const articles = props.articles;
    return (
        <div className="writer__menu">
            <label for="writer__name">{name}</label>
            <ul>
                {articles.map(article => {
                    return (
                        <MenuItem
                            article={article}
                        />

                    )
                })}
            </ul>
        </div>
    )
}

export default Menu;