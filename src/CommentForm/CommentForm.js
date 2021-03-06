import React, { Component } from 'react';
import config from '../config';
import ApiContext from '../ApiContext';

class CommentForm extends Component {

    static contextType = ApiContext;

    handleSubmitComment = (e, articleid) => {
        e.preventDefault();
        const comment = {
            "commentorid": this.context.loggedInUser.id,
            "articleid": articleid,
            "content": this.refs.comment.value,
        }
        fetch(`${config.API_BASE_URL}/comments`, {
            method: 'post',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ commentorid:comment.commentorid, articleid:comment.articleid, content:comment.content, modified: comment.modified })
        }).then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        })
            .then((data) => {
                this.context.addComment(data)
            }).catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <div className="comment-entry">
                <form id="create-comment" onSubmit={(e) => {
                    this.handleSubmitComment(e, this.props.articleid)
                }}>
                    <div className="create-commment">
                        <label>Leave a comment:</label>
                        <input type="text"
                            className="create-comment-input"
                            name="comment"
                            placeholder="'Tell us what you thought of that'"
                            ref="comment"
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>)
    }
}

export default CommentForm;