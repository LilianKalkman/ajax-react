import React, { Component } from 'react';

import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
  state ={
    fullpost: null
  }

    componentDidUpdate(){
      if(this.props.id){
        if(!this.state.fullpost || (this.state.fullpost && this.state.fullpost.id !== this.props.id)){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
        .then(response => {
          this.setState({fullpost: response.data});
        });}
      }
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
          if(this.props.id){
            post = <p style={{textAlign: 'center'}}>'loading...'</p>;
          }

          if(this.props.id && this.state.fullpost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.fullpost.title}</h1>
                    <p>{this.state.fullpost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div> );
          }
        return post;
    }
}

export default FullPost;
