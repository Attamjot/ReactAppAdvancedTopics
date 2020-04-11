import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PostForm from '../../components/PostForm';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingPost, setEditingPost] = useState({
        title: "",
        body: "",
        id: null
    });

    useEffect(() => {
        axios.get('/posts')
          .then(res => {
            setPosts(res.data);  
            setLoading(false);
          });
    }, []);

    function editPost(event, post) {
      event.preventDefault();
      setEditingPost(post);
    }

    function deletePost(event, id) {
      event.preventDefault();
      axios.delete(`/posts/${id}`)
        .then(() => {
            const postsUpdated = posts.filter(post => post.id !== id);
            setPosts(postsUpdated);
        });
    }

    const addPost = post => {
      const doesPostExists = posts.find(p => p.id === post.id);
      if(doesPostExists) {
        const index = posts.findIndex(p => p.id === post.id);
        const postsUpdated = [...posts];
        postsUpdated.splice(index, 1, post);
        setPosts(postsUpdated);
      } else {
        const updatedPosts = [...posts, post];
        setPosts(updatedPosts);
      }
    }

    return (
        <div>
         <div className="row">
             <div className="col s12">
                 <PostForm addPost={addPost} editingPost={editingPost}/>
             </div>
         </div>
          <div className="row">
              <h3>Posts: </h3>
               {
                   loading ? (
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                   ) : (
                    posts
                        .filter(post => post.id < 5)
                        .map(post => (
                            <div key={post.id} className="col s6">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-title">
                                            {post.title.substring(0,20).toUpperCase()}
                                        </div>
                                        <p>{post.body}</p>
                                    </div>
                                    <div className="card-action">
                                        <a 
                                            href="#"
                                            onClick={(event) => editPost(event, post)}>Edit</a>
                                        <a 
                                            href="#"
                                            className="delete-btn"
                                            onClick={(event) => deletePost(event, post.id)}>Delete</a>
                                    </div>
                                </div>
                            </div>
                        ))
                   )
               }
          </div>
        </div>
    )
}

export default Home;
