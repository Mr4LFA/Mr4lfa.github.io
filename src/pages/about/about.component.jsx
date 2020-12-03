import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/mas.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;MAS Yasin Arafat</strong>
                <br />A Part Time Programmer and Gamer, born in Bangladesh. I am a Amateras Full Stack Web and App Developer with MERN Stack as my Tech Stack.
                <br />
                In 2018, I Started to Learn Coding and Etical Hacking.
                <br />
                Working with my Mates, My goal is to Contribute in Open Source Projects, My experience is amazing on this Jorney.
                <br />
                Along with that, I also Play Games alot, I Love to Play FPS and Open World Games. 
                <br />I love learning about new technologies, I am also a Tech Enthusiast.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://fb.com/masyasinarafat" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        Facebook
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Mr4lfa" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/masyasinarafat" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        Instagram
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
