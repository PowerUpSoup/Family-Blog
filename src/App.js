import React, { Component } from 'react';
import Home from './Home/Home';
import NewBlogPost from './NewBlogPost/NewBlogPost';
import { Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {

state = {
  writers: [],
  articles: [],
}

componentDidMount() {
//   Promise.all([
//     //design database and point to the correct
//     fetch(`${config.API_ENDPOINT}/notes`),
//     fetch(`${config.API_ENDPOINT}/folders`)
// ])
//     .then(([notesRes, foldersRes]) => {
        
//         if (!notesRes.ok)
//             return notesRes.json().then(e => Promise.reject(e));
//         if (!foldersRes.ok)
//             return foldersRes.json().then(e => Promise.reject(e));

//         return Promise.all([notesRes.json(), foldersRes.json()]);
//     })
//     .then(([notes, folders]) => {
//         this.setState({ notes, folders });
//     })
//     .catch(error => {
//         console.error({ error });
//     });
}

render() {
  return (
    <div className="App">
      <nav className="App_nav">
        <Link to='/'>Home</Link>
        <Link to='/new-blog-post'>New blog post</Link>
      </nav>
      <main className="App_main">

        <Route exact path="/" component={Home} />
        <Route exact path="/new-blog-post" component={NewBlogPost} />
      </main>
    </div>
  );
}

}
export default App;
