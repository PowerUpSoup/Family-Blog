import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import ApiContext from '../ApiContext';

class Home extends Component {
    static contextType = ApiContext
    
    render() {
        return(
            <div>
                <main role="main">
                    <header role="banner">
                        <h1>How to Stop Smiling.<br/>A blog.</h1>
                    </header>
                    <div className="Writer-Menu">
                        {this.context.users.map((user, key) => {
                            if (user.writer) {
                                return <Menu key={key} user={user}/>
                            } else {
                                return null
                            }
                        })}
                    </div>
                </main>
                
            </div>
        )
    }
}

export default Home;