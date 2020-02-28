import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div>
                <div>
                {this.props.comment.content}
                </div>
                <div>
                    Posted at {this.props.comment.date_created}
                </div>
            </div>
        )
    }
}

export default Comment;