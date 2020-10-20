import React, {Component} from 'react';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  };
  Submit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  Change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  };
  
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.Submit} className='white'>
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.Change}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Content Project</label>
            <textarea id="content" className='materialize-textarea' onChange={this.Change}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
