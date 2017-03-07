import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class SignUp extends Component{
	constructor(props) {
   	super(props);
    		this.state = {
    			name : '', 
    			contactn: '',
    			email : '',
         	    pwd : '',
         	    confirmPwd:''
    		};
    	this.handleSignUp = this.handleSignUp.bind(this);
  	}

  	handleNameChange(event) {
    	this.setState({name: event.target.value});
  	}
    
    handleContactNoChange(event) {
    	this.setState({contactn: event.target.value});
  	}

  	handleEmailChange(event) {
    	this.setState({email: event.target.value});
  	}
    
    handlePwdChange(event) {
    	this.setState({pwd: event.target.value});
  	}

  	handleConfirmPwdChange(event) {
    	this.setState({confirmPwd: event.target.value});
  	}
    
  	handleSignUp() {

	    if(this.state.name !== '' && this.state.contactn !== '' &&  this.state.email !== '' && this.state.pwd !== '' && this.state.confirmPwd !== '' && this.state.pwd === this.state.confirmPwd){
	    	browserHistory.push('/Dashboard');
	    	localStorage.setItem('User-name', JSON.stringify(this.state.name));
	   		localStorage.setItem('User-contactn', JSON.stringify(this.state.contactn));
	   		localStorage.setItem('User-name', JSON.stringify(this.state.email));
	   		localStorage.setItem('User-pwd', JSON.stringify(this.state.pwd));
	   		localStorage.setItem('User-confirmPwd', JSON.stringify(this.state.confirmPwd));
	    }
	    
	    else if(this.state.pwd !== this.state.confirmPwd){
	  		alert("Password and confrim password dose not match");
	  	}

	    else{
	        alert("Please enter details");
	  	}

	  	
	}

	render(){
		return (
            <div id="content" className="main-content"> 
			   <div className="login">
					<h2>Sign Up</h2>
					<form>
						<span>Full Name : </span><input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
							<br></br>
							<br></br>
						<span>Contact Number : </span><input type="text" value={this.state.contactn} onChange={this.handleContactNoChange.bind(this)}/>
		        			<br></br>
							<br></br>
						<span>Email : </span><input type="text" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
	                  		<br></br>
							<br></br>
						<span>Password : </span><input type="text" value={this.state.pwd} onChange={this.handlePwdChange.bind(this)} />
							<br></br>
							<br></br>
						<span>Confirm Password : </span><input type="text" value={this.state.confirmPwd} onChange={this.handleConfirmPwdChange.bind(this)}/>
	                  		<br></br>
							<br></br>
						<button onClick={this.handleSignUp}>SignUp</button>
					</form>
				</div>
			</div>
		)
	}
}

export default SignUp;