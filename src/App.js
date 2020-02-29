
import React, { Component } from 'react';
import Home from './Home/Home';
import LoginPage from './LoginPage/LoginPage'
import NewBlogPost from './NewBlogPost/NewBlogPost';
import BlogContent from './BlogContentPage/BlogContent';
import ApiContext from './ApiContext';
import { Route, Link } from 'react-router-dom';
import config from './config';
import './App.css';

class App extends Component {
  state = {
    users: [],
    articles: [],
    comments: [],
    loggedInUser: null,
    isLoggedIn: false
  };

  componentDidMount() {

    Promise.all([
      fetch(`${config.API_BASE_URL}/users`),
      fetch(`${config.API_BASE_URL}/articles`),
      fetch(`${config.API_BASE_URL}/comments`)
    ])
      .then(([usersRes, articlesRes, commentsRes]) => {

        if (!usersRes.ok)
          return usersRes.json().then(e => Promise.reject(e));
        if (!articlesRes.ok)
          return articlesRes.json().then(e => Promise.reject(e));
        if (!commentsRes.ok)
          return commentsRes.json().then(e => Promise.reject(e));

        return Promise.all([usersRes.json(), articlesRes.json(), commentsRes.json()]);
      })
      .then(([users, articles, comments]) => {
        let sessionStorageUser = JSON.parse(sessionStorage.getItem("user"))
        this.setState({ users, articles, comments, isLoggedIn: !!sessionStorageUser, loggedInUser: sessionStorageUser });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  logOutUser() {
    this.setState({
      loggedInUser: null,
      isLoggedIn: false
    })
  }

  addComment = comment => {
    this.setState({
      comment: this.state.comments.push(comment)
    })
  }

  addBlogPost = blogPost => {
    this.setState({
      blogPost: this.state.articles.push(blogPost)
    })
  }

  addNewUser = newUser => {
    this.setState({
      user: this.state.users.push(newUser),
      loggedInUser: newUser,
      isLoggedIn: true
    })
  }

  updateLoggedInUser = loggedInUser => {
    this.setState({
      loggedInUser: loggedInUser,
      isLoggedIn: true
    })
  }



  renderNewBlogPostNavButton() {
    if ((this.state.isLoggedIn) && (this.state.loggedInUser.writer)) {
      return <Link to='/new-blog-post'>New blog post</Link>
    } else {
      return null
    }
  }

  render() {
    const value = {
      users: this.state.users,
      articles: this.state.articles,
      comments: this.state.comments,
      loggedInUser: this.state.loggedInUser,
      isLoggedIn: this.state.isLoggedIn,
      updateLoggedInUser: this.updateLoggedInUser,
      addComment: this.addComment,
      addNewUser: this.addNewUser,
      addBlogPost: this.addBlogPost
    }

    console.log("userstate", this.state.loggedInUser, this.state.isLoggedIn)

    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <nav className="App_nav">
            <Link to='/'>Home</Link>
            {this.renderNewBlogPostNavButton()}
            {this.state.isLoggedIn
              ? (<Link to="/" onClick={() => this.logOutUser()}>Logout</Link>)
              : (<Link className="login_link" to='/login'>Login</Link>)}
          </nav>
          <main className="App_main">

            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/new-blog-post" component={NewBlogPost} />
            <Route exact path="/blog-post/:id" component={BlogContent} />
          </main>
        </div>
      </ApiContext.Provider>
    );
  }

}
export default App;
