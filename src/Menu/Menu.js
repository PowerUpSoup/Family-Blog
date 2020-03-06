import React, { Component } from 'react';
import MenuItem from './MenuItem'
import ApiContext from '../ApiContext';

class Menu extends Component {
    static contextType = ApiContext

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <div className="writer__menu">
                <label className="writer_name">{this.capitalizeFirstLetter(this.props.user.name)} </label>
                <ul className="writer__menu__article__list">
                    {this.context.articles.map((article, key) => {
                        if (this.props.user.id === article.authorid) {
                            return (
                                <MenuItem
                                    key={key}
                                    article={article}      
                                />
                            ) 
                        } else {
                            return null
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default Menu;