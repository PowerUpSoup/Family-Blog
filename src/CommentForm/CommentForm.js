import React, { Component } from 'react';
import ApiContext from '../ApiContext';

class CommentForm extends Component {

    static contextType = ApiContext;

    handleSubmitComment = (e, articleid) => {
        e.preventDefault();
        const comment = {
            "id": 1000000, //this is a placeholder as the API will later handle iterating the id
            "commentorid": this.context.loggedInUser.id,
            "articleid": articleid,
            "content": this.refs.comment.value,
            "modified": "2018-06-16T23:00:00.000Z"
        }
        this.context.addComment(comment)
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