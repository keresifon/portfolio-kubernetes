import React from "react";
//import { Card, CardGroup, Button } from "react-bootstrap";
//import '../component/overlay.scss';

function Portfolio(props) {
  return (
    <div className="alert border">
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">cof95</h5>
              <p className="card-text">
			  An Alumni Membership Web Application built as a server-less application on AWS. Built on React with Amplify making use of Amazon Cognito for User Management and Authentication. Lambda triggers to populate a DynamoDB on user creation. Dynamo DB stream to replicate user data and build the application's user table. Images stored on Cloudinary to make use of the automatic transformation available. Static Content using Contentful and Graphql API
              </p>
              <a
                href="https://www.cof95.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger"
              >
                View
              </a>
            </div>
          </div>
		  <div className="p-2"></div>
		  <div className="card">
            <div className="card-body">
              <h5 className="card-title">Okpogho</h5>
              <p className="card-text">
                An Ecommerce Demo Site built on the MERN Stack.
              </p>
              <a
                href="https://ecom.keresifon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger"
              >
                View
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Kwesiblack Photograpy</h5>
              <p className="card-text">
			  Photography Website built with Gatsby              </p>
              <a
                href="https://www.kwesiblack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger"
              >
                View
              </a>
            </div>
          </div>
		  <div className="p-2"></div>

		  <div className="card">
            <div className="card-body">
              <h5 className="card-title">LASIMRA</h5>
              <p className="card-text">
                A Data collation site built with the MERN Stack.
              </p>
              <a
                href="https://lasimra.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger"
              >
                View
              </a>
            </div>
          </div>
		  <div className="p-2"></div>

		  <div className="card">
            <div className="card-body">
              <h5 className="card-title">Akisok</h5>
              <p className="card-text">
			  A blog built with Gatsby
              </p>
              <a
                href="https://ecom.keresifon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
	      </div>
  );
}

export default Portfolio;
