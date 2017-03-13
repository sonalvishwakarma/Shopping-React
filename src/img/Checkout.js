import React, { Component } from 'react';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row, Image, Tabs,Tab, FormGroup,FormControl,ControlLabel} from 'react-bootstrap';
import home3 from './home3.jpg';

class ViewCart Checkout Component {

	render(){
		return (
			<div className="main-app">
                <Header/> 
                <div id="content" className="main-content"> 
				   	<div className="login">
						<Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
						    <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
						    <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
						    <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
						  </Tabs>
					</div>
				</div> 
            </div>
        );
	}
}

export default Checkout;