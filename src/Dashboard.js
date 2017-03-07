import React, { Component } from 'react';
import { browserHistory } from 'react-router';

var EMPLOYEES = [
	{name: 'Yogesh Dhami', age: 28, Designation: 'Tester'},
	{name: 'Rupal Yadav', age: 25, Designation: 'UI Designer'},
	{name: 'Shwetam Thakur', age: 26, Designation: 'Manager'}
];

export class Employee  extends Component {
  	render() {
    	return (
			<tr>
				<td>{this.props.employee.name}</td>
				<td>{this.props.employee.age}</td>
				<td>{this.props.employee.Designation}</td>
			</tr>		
      	);
  	}
};

export class EmployeeTable extends Component {
  	render() {
    var rows = [];
    	this.props.employees.forEach(function(employee) {
      	rows.push(<Employee employee={employee} />);
    });
    return (
      	<table className="App-table">
	        <thead>
	          	<tr>
	            	<th>Name</th>
	            	<th>Age</th>
	            	<th>Designation</th>
	          	</tr>
	        </thead>
	        <tbody>
	        	{rows}
	        </tbody>
      	</table>
      	);
  	}
};

class Dashboard extends Component {

	constructor(props) {
   	super(props);
    		this.state = {
    			name : '',
         	    age : '',
         	    designation : ''
    		};
    	this.saveData = this.saveData.bind(this);
  	}

	componentDidMount() {
		this.getIntial();
		this.getData();
  	};

  	getData(){
  		fetch('https://docs.google.com/document/d/1Ez8-R1wsJpTSqRkH4OnkEnBlfd46xc4B_esDshXwHLo/edit?pli=1', {
			method: 'get'
			}).then(function(response) {
				console.log(response)
			}).catch(function(err) {
				alert(err)
		});
  	}

  	getIntial(){
    	document.getElementById('name').innerHTML = JSON.parse(localStorage.getItem("auth - Email"));
    	document.getElementById('uname').innerHTML = JSON.parse(localStorage.getItem("User-name"));
	}

    handleLogout() {
      	localStorage.clear();
      	browserHistory.push('/');
    }

	saveData() {
		var EMPLOYEES  = [
			{
				name : this.state.name,
				age : this.state.age,
				designation : this.state.designation,
			}
		]
		var data = [];
		var saveValue = JSON.stringify(data.push(EMPLOYEES));
		alert(saveValue)
	};

	handleName(event){
       this.setState({name: event.target.value});
	}

	handleAge(event){
       this.setState({age: event.target.value});
	}

	handleDesignation(event){
       this.setState({designation: event.target.value});
	}

	render(){
		return ( 
            <div id="content" className="main-content"> 
			   <div className="login">
					<div>
						<span>Welcome </span> <p id="name" value={this.props.value}></p>						<span>Welcome </span> <p id="name" value={this.props.value}></p>
						<span>Welcome </span> <p id="uname" value={this.props.value}></p>						<span>Welcome </span> <p id="name" value={this.props.value}></p>

							<br></br>
						<button onClick={this.handleLogout}>Logout</button>
							<br></br>
					</div>
					{/*<EmployeeTable employees={EMPLOYEES} />*/}
					<hr></hr>
					<div>
					 	<form>
							<span>Name : </span><input type="text" value={this.state.name} onChange={this.handleName.bind(this)}/>
								<br></br>
								<br></br>
							<span>Age : </span><input type="text" value={this.state.age} onChange={this.handleAge.bind(this)}/>
				              	<br></br>
								<br></br>
							<span>Designation : </span><input type="text" value={this.state.designation} onChange={this.handleDesignation.bind(this)}/>
								<br></br>
								<br></br>
							<button onClick={this.saveData}>Save</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard;