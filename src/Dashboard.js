import React, { Component } from 'react';
import Header from './Home.js';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Panel, Col} from 'react-bootstrap';
import images from './img/images.png';
import product from './img/product.png';
import deliveryOrder from './img/deliveryOrder.jpg';

class Dashboard extends Component {

	render(){
		return ( 
            <div className="main-app">
               	<Header/> 
	           	<div id="content">
				   	<div >
						<br></br><br></br><br></br><br></br><br></br><br></br>
					 	<div>
					       <Col md={4}>
						        <a href="/Profile">
						        	<Panel header="Profile" footer="More Info Here" bsStyle="info">
						             	<img className="iconImg" src={images} alt="profile"/>
						          	</Panel>
					            </a>
					        </Col>

					        <Col md={4}>
						        <a href="/viewCart">                                                                                                    
						          	<Panel header="View Cart" footer="More Info Here" bsStyle="info">
						             	<img className="iconImg" src={product} alt="yourcart"/>
						          	</Panel>
						        </a>  
					        </Col>
					    </div>
				    </div>		  
				</div>
			</div>
		)
	}
}

export default Dashboard;