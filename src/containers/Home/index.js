/** @format */

import React from "react";
import { Jumbotron,Row,Col, Container} from "react-bootstrap";
import Layout from "../../components/Layout";
import './style.css';
import {NavLink} from 'react-router-dom';

const Home = () => {
	return (
		<Layout sidebar>
			
			
			{/* <Jumbotron style={{ margin: "5rem", background: "#fff" }}>
				<h1 className="text-center ">Welcome to Admin Dashboard</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
					officiis minima voluptas, nesciunt placeat eligendi quidem harum. Quod
					est rem magnam at placeat quae necessitatibus iure atque amet modi,
					esse illum, ut quas in animi unde ipsam! Corporis velit voluptatum,
					earum unde ad quaerat ipsam dolore nam autem, nisi odio?
				</p>
			</Jumbotron> */}
		</Layout>
	);
};

export default Home;
