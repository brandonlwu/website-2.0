import '../css/App.css';
import React, { useState } from 'react';
import faceimg1 from '../assets/optimized-face-smile.png'
import { SocialIcon } from 'react-social-icons';
import { useNavigate } from "react-router-dom";

function Condensed() {
    const navigate = useNavigate();
    const [imagePath, setImagePath] = useState(faceimg1);
    const [pressed, setPressed] = useState(true);
    const [introText, setIntroText] = useState("Hey there! Great to meet you");

    function clickButton() {
        setImagePath(faceimg1);
        setPressed(false);
        // setIntroText("Well I'd be more than happy to introduce myself!");
    }

    return (
       <div className="container">
        <div className = "text-container">   
            <button className = "back"  onClick = {() => navigate('/')}>&lt;</button>
            <h2 className = "title condensed">{introText}</h2>
        </div>
        <div>
            <img className = "mainimg" src = {imagePath} alt = "Face rises"></img>
        </div>
        <div>
          <div className = "body-container condensed">
            <div>
                <p>I'm Brandon! I currently work at <span className = "bcg link"><a href = "https://www.bcg.com/" target="_blank">BCG</a></span>. I like creating unique digital experiences and my goal is to contribute to meaningful work</p>
                <ul className = "condensed">
                    <li> My past projects include 
                        <span className = "daily link">
                        <a href = "https://www.dailydropout.fyi/" target="_blank"> daily dropout</a>
                        </span>, 
                        <span className = "nfme link">
                        <a href = "https://letsnft.me/" target="_blank"> letsnft.me</a>
                        </span>,
                        <span className = "sticks link">
                        <a href = "https://sticks.brandonlwu.com/" target="_blank"> sticks and bones</a>
                        </span>
                    </li>
                    <li>In the past, I worked as an engineer at
                        <span className = "athelas link">
                        <a href = "https://www.athelas.com/" target="_blank"> Athelas</a>
                        </span>, studied abroad as a
                        <span className = "yale link">
                        <a href = "https://light.yale.edu/" target = "_blank"> light fellow</a>
                        </span>, and researched at the
                        <span className = "link">
                        <a href = "https://www.andermannlab.com/" target = "_blank"> andermann lab</a>
                        </span>
                    </li>
                    <li>In my free time I enjoy surfing, biking, and eating great taco truck tacos.</li>
                </ul>
                <div className = 'socials'>
                    <SocialIcon className = "social-icons" url = "https://twitter.com/wuhoobrandon" network="twitter" style={{ height: 60, width: 60 }} />
                    <SocialIcon className = "social-icons" url = "https://github.com/brandonlwu" network="github" style={{ height: 60, width: 60 }} />
                    <SocialIcon className = "social-icons" url = "https://www.linkedin.com/in/brandon-w-293342133/" network="linkedin" style={{ height: 60, width: 60 }} />
                </div>
            </div>
          </div>
        </div>
        <div className = "spacer"></div>
      </div>
    );
  }
  
  export default Condensed;