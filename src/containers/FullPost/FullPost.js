import React, { Component } from 'react';

import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
  state ={
    fullpost: null,
    error: false
  }

    componentDidMount(){
      if(this.props.match.params.id){
        if(!this.state.fullpost || (this.state.fullpost && this.state.fullpost.id !== +this.props.match.params.id)){
          axios.get(`/posts/${this.props.match.params.id}`)
          .then(response => {
            this.setState({fullpost: response.data});
          })
          .catch(error => {
          this.setState({error: true})
          });
        }
      }
    }

    componentDidUpdate(){
      if(this.props.match.params.id){
        if(!this.state.fullpost || (this.state.fullpost && this.state.fullpost.id !== +this.props.match.params.id)){
          axios.get(`/posts/${this.props.match.params.id}`)
          .then(response => {
            this.setState({fullpost: response.data});
          })
          .catch(error => {
          this.setState({error: true})
          });
        }
      }
    }

    deletePostHandler = () => {
      axios.delete(`/posts/${this.props.match.params.id}`).then(
        response => console.log(response)
      );
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

          if(!this.state.error){
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
          }

          if(this.state.error === true){
            post = <p style={{textAlign: 'center'}}>Something went wrong...</p>
          }

          if(this.state.fullpost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.fullpost.title}</h1>
                    <p>{this.state.fullpost.body}</p>
                    <div className="Edit">
                      <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div> );
          }
        return post;
    }
}

export default FullPost;
