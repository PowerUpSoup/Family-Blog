import React, { Component } from 'react';
import ApiContext from '../ApiContext';

class NewBlogPost extends Component {

    static contextType = ApiContext;

    handleSubmitNewBlog = (e) => {
        e.preventDefault();
        const blogPost = {
            "id": 100000, //placeholder, the api will handle iterating the id
            "title": this.refs.blogTitle.value,
            "modified": "2019-01-03T00:00:00.000Z", //placeholder
            "authorId": this.context.loggedInUser.id,
            "content": this.refs.blogContent.value
        }
        this.context.addBlogPost(blogPost)
        this.props.history.push('/')
    }

    render() {

        return (
            <div className="newBlogPost_div">
                <header>
                    <h1>New Blog Post</h1>
                </header>
                <section>
                    <form id="new-blog-post" onSubmit={(e) => {
                        debugger
                        this.handleSubmitNewBlog(e)
                    }}>
                        {console.log("context", this.context)}
                        <div className="title_div">
                            <label>Blog title</label>
                            <input type="text"
                                name="blog_title"
                                placeholder="'My Next Blog Post'"
                                ref="blogTitle"
                                required />
                        </div>
                        <br />
                        <div className="content_div">
                            <label>Content</label>
                            <textarea
                                name="content"
                                rows="15"
                                ref="blogContent"
                                required />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </div>
        )
    }
}

export default NewBlogPost;