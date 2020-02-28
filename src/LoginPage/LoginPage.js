import React from 'react';
import config from '../config';
import ApiContext from '../ApiContext';

class LoginPage extends React.Component {

    static contextType = ApiContext;
    user = null;

    handleSubmitLogin = (e) => {
        e.preventDefault();
        const username = this.refs.loginUsername.value.toLowerCase();
        const password = this.refs.loginPassword.value;
        const { users = [] } = this.context;
        this.user = users.find(user => username === user.name) || ("Invalid Username or Password")
        if (this.user.password === password) {
            this.context.updateLoggedInUser(this.user)
            this.props.history.push('/')
        } else {
            return (null)
        }

    }

    handleSubmitCreateAccount = (e) => {
        e.preventDefault();
        const username = this.refs.createUsername.value;
        const passwordFirst = this.refs.createPasswordFirst.value;
        const passwordSecond = this.refs.createPasswordSecond.value;
        const newUser = {
            "name": username,
            "writer": false,
            "admin": false,
            "password": passwordFirst
        }
        if (passwordFirst === passwordSecond) {
            fetch(`${config.API_BASE_URL}/users`, {
                method: 'post',
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify({ name:newUser.name, writer:newUser.writer, admin:newUser.admin, password:newUser.password })
            }).then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
                .then((data) => {
                    //this.context.addNewUser({name, writer, admin, password, id:data.id, datecreated:data.date_created})
                    this.context.addNewUser(data)
                    this.props.history.push('/')
                }).catch(error => {
                    console.error({ error })
                })
        } else {
            return null //would like to display an error message in the form, don't know how to do that
        }
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Login</h1>
                </header>
                <section>
                    <form id="login-form" onSubmit={(e) => {
                        this.handleSubmitLogin(e)
                    }}>
                        <div className="username">
                            <label >Username:</label>
                            <input type="text"
                                name="loginUsername"
                                placeholder="'Your Username Here'"
                                ref="loginUsername"
                                required />
                        </div>
                        <br />
                        <div className="password">
                            <label >Password:</label>
                            <input type="password"
                                name="loginPassword"
                                placeholder="'Your Username Here'"
                                ref="loginPassword"
                                required />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </section>
                <header>
                    <h1>...or Create an Account</h1>
                </header>
                <section>
                    <form id="create-account-form" onSubmit={(e) => {
                        this.handleSubmitCreateAccount(e)
                    }}>
                        <div className="create-username">
                            <label>Desired Username:</label>
                            <input type="text"
                                name="create-username"
                                placeholder="Desired Username:"
                                ref="createUsername"
                                required />
                        </div>
                        <div className="create-password-first">
                            <label >Enter Password:</label>
                            <input type="text"
                                name="create-password-first"
                                placeholder="Your Password"
                                ref="createPasswordFirst"
                                required />
                            <br />
                            <label >Re-Enter Password:</label>
                            <input type="text"
                                name="create-password-second"
                                placeholder="Don't use 'password'"
                                ref="createPasswordSecond"
                                required />
                            <button type="submit">Submit</button>
                        </div>

                    </form>
                </section>
            </div>
        )
    }
}

export default LoginPage;