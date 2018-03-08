import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';
import { Route } from 'react-router-dom';

class Posts extends Component {
  state = {
    posts: []
  }
    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map( post => {
          return {...post,
          author: 'Max'}
        });
        this.setState({ posts: updatedPosts});
      });
    }

    selectedPostIdHandler = (id) => {
      this.props.history.push(this.props.match.url + '/' + id);
    }

    render () {
      const posts = this.state.posts.map( post => {
      return (
          <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.selectedPostIdHandler(post.id)}
          />
      );
    });

        return (
              <section className="Posts">
                {posts}
                <Route path={this.props.match.url + '/:id'} component={FullPost}/>
              </section>
        );
    }
}

export default Posts;
