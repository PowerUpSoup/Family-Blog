import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import ApiContext from '../ApiContext';
import CommentForm from '../CommentForm/CommentForm';
import { Link } from 'react-router-dom';

class BlogContent extends Component {
    static contextType = ApiContext;
    
    render() {
        const { articles = [] } = this.context
        const articleid = parseInt(this.props.match.params.id)
        const article = articles.find(article => article.id === articleid) || { content: '', title: '' }
        const isLoggedIn = this.context.isLoggedIn
        return (
            <div className="blog-Content-Page">
                <div className="blog-post">
                    <header>
                        <h1>{article.title}</h1>
                    </header>
                    <div>
                        <pre className="blog-post-content">{article.content}</pre>
                    </div>
                </div>
                
                {isLoggedIn
                    ? <CommentForm articleid={articleid}/>
                    : <Link to='/login'>Login to leave a comment!</Link>}

                <section className="comment-section">
                    <div className="comments">
                        {this.context.comments.map((comment, key) => {
                            if (comment.articleid === article.id) {
                                return <Comment
                                    key={key}
                                    comment={comment} />
                            } else {
                                return null
                            }
                        })}
                    </div>
                </section>
            </div>
        )
    }
}

export default BlogContent;