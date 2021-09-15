import React from 'react';
import './App.scss';
import { Col, Row, Alert, Container } from 'react-bootstrap';
import ReactTextRotator from 'react-text-rotator';
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import Content from './component/Content';
import { StaticKitProvider } from '@statickit/react';

function App() {
	const content = [
		{
			text: 'Full Stack Developer.',
			className: 'h1 text-center introRed',
			animation: 'fade',
		},
		{
			text: 'MERN Stack.',
			className: 'h1 text-center introRed',
			animation: 'fade',
		},
		{
			text: 'Gatsby.',
			className: 'h1 text-center introRed',
			animation: 'fade',
		},
		{
			text: 'Photographer.',
			className: 'h1 text-center introRed',
			animation: 'fade',
		},
	];

	return (
		<StaticKitProvider site="fb20e75bfacd">
			<div className="vh-100 bg">
			<div >
				<Container fluid>
				<Row>
					<Col >
						<Row>
							<Col className="py-5" >
								<div>
									<a
										href="https://github.com/keresifon"
										target="_blank"
										rel="noopener noreferrer"
										className="p-3"
									>
										<FaGithub className="h1  iconColor" />
									</a>
									<a
										href="https://www.facebook.com/KwesiFBlack"
										target="_blank"
										rel="noopener noreferrer"
										className="p-3"
									>
										<FaFacebook className="h1  iconColor" />
									</a>
									<a
										href="https://twitter.com/kwesiblak"
										target="_blank"
										rel="noopener noreferrer"
										className="p-3"
									>
										<FaTwitter className="h1  iconColor" />
									</a>

									<a
										href="https://www.instagram.com/keresifon/?hl=en"
										target="_blank"
										rel="noopener noreferrer"
										className="p-3"
									>
										<FaInstagram className="h1  iconColor" />
									</a>
								</div>
							</Col>
						</Row>
						<Row>
							<Col>
								<div className="container ml-5 py-5">
									<div className="welcome">Welcome</div>
									<div className="h1  introColor">Hi, I'm Kere Ekpenyong</div>
									<div>
										<ReactTextRotator content={content} time={5000} startDelay={2000} />
									</div>
								</div>
							</Col>
						</Row>

						<Row className="pbl-6 ">
							<Col > {''}</Col>
						</Row> 
						<Row className=" justify-content-between">
							<Col g={true}>
								<Alert variant="outline-danger" className="alert border">
									<Alert.Heading>Credit & Dependencies</Alert.Heading>
									<p>The model in the background is Ella, one of my twin toddlers.</p>
									<hr />
									<p className="mb-0"></p>
									<Row>
										<Col g={true} >
											<div>
												<ul>
													<li>react</li>
													<li>react-bootstrap</li>
													<li>bootstrap</li>
												</ul>
											</div>
										</Col>
										<Col>
											<div>
												<ul>
													<li>react-icons</li>
													<li>react-text-rotator</li>
													<li>react-icons</li>
												</ul>
											</div>
										</Col>
										<Col>
											<div>
												<ul>
													<li>sass</li>
													<li>react-animated-tree</li>
													<li>@statickit/react</li>
												</ul>
											</div>
										</Col>
									</Row>
								</Alert>
							</Col>
						</Row>
					</Col>
					
					<Col lg={true} >
						<Content />
					</Col>
				</Row>
				</Container>
			</div>
			</div>
		</StaticKitProvider>
	);
}

export default App;
