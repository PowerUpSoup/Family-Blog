import React, { Component } from 'react';
import Home from './Home/Home';
import LoginPage from './LoginPage/LoginPage'
import NewBlogPost from './NewBlogPost/NewBlogPost';
import BlogContent from './BlogContentPage/BlogContent';
import ApiContext from './ApiContext';
import { STORE } from './dummy-store';
import { Route, Link } from 'react-router-dom';

import './App.css';

class App extends Component {

  state = {
    users: [],
    articles: [],
    comments: [],
    loggedInUser: null,
    isLoggedIn: false
  };

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

  componentDidMount() {
    const users = STORE.users;
    const articles = STORE.articles;
    const comments = STORE.comments;
    this.setState({ users, articles, comments })

  }

  renderNewBlogPostNavButton() {
    if ((this.state.isLoggedIn) && (this.state.loggedInUser.writer)) {
      return <Link to='/new-blog-post'>New blog post</Link>
    } else {
      return null
    }
  }

  render() {
    
    console.log(this.state.loggedInUser)
    
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
