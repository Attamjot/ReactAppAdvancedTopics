import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const PostForm = ({ addPost, editingPost }) => {
    const [loading, setLoading] = useState(false);
    const [post , setPost] = useState({ title: "", body: "" });

    useEffect(() => {
      console.log("editing post entered useEffect", editingPost);
      setPost(editingPost);
    }, [editingPost]);

    const onChangeHandler = (event) => {
      const updatedPost = {...post, [event.target.name]: event.target.value};
      setPost(updatedPost);
    };

    const onSubmit = (event) => {
      event.preventDefault();
      setLoading(true);
      if(post.id) {
        axios.put(`/posts/${post.id}`, post)
        .then(res => {
            addPost(res.data);
            setPost({ title: "", body: "" });
            setLoading(false);
        })
        .catch(error => console.log("Error: ", error));
      } else {
        axios.post("/posts", post)
        .then(res => {
            addPost(res.data);
            setPost({ title: "", body: "" });
            setLoading(false);
        })
        .catch(error => console.log("Error: ", error));
      }
    };

    return (
        <Fragment>
          {
              !loading ? (
                <form className="push-in" onSubmit={onSubmit}>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={post.title}
                            onChange={(event) => onChangeHandler(event)}
                            className="validate"
                            />
                    </div>
                    <div className="input-field">
                        <label htmlFor="body">Body</label>
                        <input
                            type="text"
                            name="body"
                            value={post.body}
                            onChange={(event) => onChangeHandler(event)}
                            className="validate"
                            />
                    </div>  
                    <button type="submit" className="waves-effect waves-light btn">
                      {
                          post.id ? "Update" : "Add"
                      }
                    </button>                  
                </form>
              ) : (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>                 
              )
          }
        </Fragment>
    );
}

export default PostForm;