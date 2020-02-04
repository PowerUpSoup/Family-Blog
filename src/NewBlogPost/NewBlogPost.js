import React from 'react';



class NewBlogPost extends React.Component {
    
    handleSubmit = (e) => {
        e.preventDefault();

        // fetch(`${config.API_ENDPOINT}/blogposts/`, {
        //     method: 'POST',
        //     headers: {
        //       'content-type': 'application/json'
        //     },
        //     body: JSON.stringify({title, id, content, modified})
        //   })
        //   .then(res => {
        //     if (!res.ok)
        //       return res.json().then(e => Promise.reject(e))
        //     return res.json()
        //   })
        //   .then((data) => {
        //     this.context.addNote({ name, folderId, content, modified, id:data.id  })
        //     this.props.history.push('/')
        //   }).catch(error => {
        //     console.error({ error })
        //   })
    }

    render() {
    return (
        <div className="newBlogPost_div">
            <header>
                <h1>New Blog Post</h1>
            </header>
            <section>
                <form id="new-blog-post" onSubmit={(e) => {
                    this.handleSubmit(e)
                }}>
                    <div class="title_div">
                        <label for="blog_post_title">Blog title</label>
                        <input  type="text" 
                                name="blog_title" 
                                placeholder="'My Next Blog Post'" 
                                required />
                    </div>
                    <br />
                    <div class="content_div">
                            <label for="content">Content</label>
                            <textarea name="content" rows="15" required />
                    </div>

                        <button type="submit">Submit</button>
                </form>
            </section>
        </div>
            )
        }}
        
export default NewBlogPost;