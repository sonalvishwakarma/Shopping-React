import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

class Login extends Component {

 	constructor(props) {
   	super(props);
    		this.state = {
    			name : '',
         	    pwd : ''
    		};
    	this.handleLogin = this.handleLogin.bind(this);
  	}

  	handleEmailChange(event) {
    	this.setState({name: event.target.value});
  	}
    
    handlePwdChange(event) {
    	this.setState({pwd: event.target.value});
  	}

  	handleLogin() {

	    if(this.state.name === 'sonal.v@gmail.com' && this.state.pwd === '12345' ){
	    	browserHistory.push('/Dashboard');
	    	localStorage.setItem('auth - Email', JSON.stringify(this.state.name));
	   		localStorage.setItem('auth - Pwd', JSON.stringify(this.state.pwd));
	    }
	    else if(this.state.name === '' && this.state.pwd === '' ){
	        alert("Oops! You are not providing crendentials, please enter email and password");
	  	}
	  	else {
	        alert("Please enter correct email and password");
	  	}
	}

	render(){
		return (
            <div id="content" className="main-content"> 
			   <div className="login">
					<h2>Login</h2>
					<form>
					<span>Email : </span><input type="text" value={this.state.name} onChange={this.handleEmailChange.bind(this)} />
						<br></br>
						<br></br>
					<span>Password : </span><input type="text" value={this.state.pwd} onChange={this.handlePwdChange.bind(this)}/>
                  	<br></br>
						<br></br>
					<button onClick={this.handleLogin}>login</button>
					 <Link href="/">forget password</Link>
					</form>
				</div>
			</div>
		)
	}
}

export default Login;