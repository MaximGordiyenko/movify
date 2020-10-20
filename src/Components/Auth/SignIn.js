import React, {Component} from 'react';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
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
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.Change}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Email</label>
            <input type="password" id="password" onChange={this.Change}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;