import React from "react";
import { Alert } from "react-bootstrap";
import ReactTextRotator from "react-text-rotator";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaAws,
  FaLinkedin,
} from "react-icons/fa";
import Content from "../component/Content";
import { Animated } from "react-animated-css";

function Home(props) {
  const content = [
    {
      text: "AWS.",
      className: "h1 text-center introRed",
      animation: "fade",
    },
    {
      text: "DevOps Engineer",
      className: "h1 text-center introRed",
      animation: "fade",
    },
    {
      text: "Docker, Kubernetes, Jenkins",
      className: "h1 text-center introRed",
      animation: "fade",
    },
    {
      text: "Full Stack Developer.",
      className: "h1 text-center introRed",
      animation: "fade",
    },
    {
      text: "MERN Stack.",
      className: "h1 text-center introRed",
      animation: "fade",
    },
    {
      text: "Gatsby.",
      className: "h1 text-center introRed",
      animation: "fade",
    },

    {
      text: "Photographer.",
      className: "h1 text-center introRed",
      animation: "fade",
    },
  ];
  return (
    <div className="container-fluid bg">
      <div className="row">
        <div className="col py-5">
          <Animated
            animationIn="flash"
            animationOut="fadeOut"
            animationInDuration={3000}
            isVisible={true}
          >
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
                href="https://www.credly.com/users/keresifon-ekpenyong/badges"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <FaAws className="h1  iconColor" />
              </a>

              <a
                href="https://www.linkedin.com/in/keresifon-ekpenyong-baa58810"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <FaLinkedin className="h1  iconColor" />
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
          </Animated>

          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInDuration={3000}
            isVisible={true}
          >
            <div className=" ml-5 py-5">
              <div className="welcome">Welcome</div>
              <div className="h1  introColor">Hi, I'm Kere Ekpenyong</div>

              <div>
                <ReactTextRotator
                  content={content}
                  time={5000}
                  startDelay={2000}
                />
              </div>
            </div>
          </Animated>
          <div className="pbl-6 d-none d-sm-block "></div>
          <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            animationInDuration={3000}
            animationInDelay={1000}
            isVisible={true}
          >
            <div id="dependencies">
              <Alert variant="outline-danger" className="alert border">
                <Alert.Heading>Credit & Dependencies</Alert.Heading>
                <p>
                  Ella , the model in the background, is one of my twin
                  toddlers.
                </p>
                <hr />
                <p className="mb-0"></p>

                <div className="row">
                  <div className="col">
                    <div>
                      <ul>
                        <li>react</li>
                        <li>react-bootstrap</li>
                        <li>bootstrap</li>
                        <li>react-animated-css</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <ul>
                        <li>react-icons</li>
                        <li>react-text-rotator</li>
                        <li>react-icons</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <ul>
                        <li>sass</li>
                        <li>react-animated-tree</li>
                        <li>@statickit/react</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Alert>
            </div>
          </Animated>
        </div>

        <div className="col ">
          <Animated
            animationIn="bounceInRight"
            animationOut="fadeOut"
            animationInDuration={3000}
            isVisible={true}
          >
            <div>
              <Content />
            </div>
          </Animated>
        </div>
      </div>
    </div>
  );
}

export default Home;
