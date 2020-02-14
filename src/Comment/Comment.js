import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div>
                <div>
                {this.props.comment.content}
                </div>
                <div>
                    Posted at {this.props.comment.modified}
                </div>
            </div>
        )
    }
}

export default Comment;