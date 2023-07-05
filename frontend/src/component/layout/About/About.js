import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import dp from "../../../images/dp.png";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/udai-sharma-980a27238/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={dp}
              alt="Founder"
            />
            <Typography>Udai Sharma</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              Hello Guyzz..I'm Udai from NIT Jamshedpur.This is a MERN Ecommerce website built and modified by me!!
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">VISIT</Typography>
            <a
              href="https://www.linkedin.com/in/udai-sharma-980a27238/"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>
{/* 
            <a href="https://instagram.com/meabhisingh" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
