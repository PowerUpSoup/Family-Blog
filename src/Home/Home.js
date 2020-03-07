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
                        <h1>How to Stop Smiling.<br/>A blog.</h1><br/><h6>for the purposes of demo, you can log in as a user with writer access using username: irene password: writer</h6>
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