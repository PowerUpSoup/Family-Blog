import React, { Component } from 'react';
import config from '../config';
import ApiContext from '../ApiContext';

class NewBlogPost extends Component {

    static contextType = ApiContext;

    formatDateTime() {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date+' '+time;
        return dateTime
      }

    handleSubmitNewBlog = (e) => {
        e.preventDefault();
        const blogPost = {
            "title": this.refs.blogTitle.value,
            "modified": `${this.formatDateTime()}`,
            "authorid": this.context.loggedInUser.id,
            "content": this.refs.blogContent.value
        }
        fetch(`${config.API_BASE_URL}/articles`, {
            method: 'post',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ title:blogPost.title, modified:blogPost.modified, authorid:blogPost.authorid, content:blogPost.content })
        }).then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        })
            .then((data) => {
                this.context.addBlogPost(data)
                this.props.history.push('/')
            }).catch(error => {
                console.error({ error })
            })
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
                                className="title_div_input"
                                name="blog_title"
                                placeholder="'My Next Blog Post'"
                                ref="blogTitle"
                                required />
                        </div>
                        <br />
                        <div className="content_div">
                            <label>Content</label>
                            <textarea
                                className="content_div_input"
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