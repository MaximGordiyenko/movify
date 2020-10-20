import React, {Component} from 'react';
import {connect} from "react-redux";
import {createPost, deletePost} from '../actions/postAction';
import Button from "./Button";

class Post extends Component {
  state = {
    title: "",
    body: "",
  };
  
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      this.props.createPost(this.state);
      this.handleReset();
    }
  };
  
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  
  handleReset = () => {
    this.setState({
      title: "",
      body: "",
    });
  };
  
  render() {
    return (
      <section>
        <section>
          <form>
            <div>
              <input type="text"
                     placeholder="Title"
                     className="form-control"
                     name="title"
                     onChange={this.handleInputChange}
                     value={this.state.title}
              />
            </div>
            <div>
            <textarea name="body"
                      id=""
                      cols="20"
                      rows="10"
                      placeholder="Body"
                      className="form-control"
                      onChange={this.handleInputChange}
                      value={this.state.body}>
            </textarea>
            </div>
            <section>
              <Button type="button"
                      primary
                      onClick={this.handleSubmit}>
                Add post
              </Button>
              <Button type="button"
                      onChange={this.handleReset}>Reset
              </Button>
            </section>
          </form>
        </section>
        <div>
          {
            this.props.posts.map(el =>
              <div key={el.id}>
                <h3>{el.title}</h3>
                <p>{el.body}</p>
                <Button onClick={() => this.props.deletePost(el.id)}>Delete Post</Button>
              </div>)
          }
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  deletePost: id => dispatch(deletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
