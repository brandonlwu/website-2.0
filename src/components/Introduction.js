import '../css/App.css';
import React, { useState } from 'react';
import faceimg1 from '../assets/optimized-face-serious.png'
import faceimg2 from '../assets/optimized-face-smile-blink.png'
import github from '..//assets/github.png'
import linkedin from '..//assets/linkedin.png'
import twitter from '..//assets/twitter.png'
import { useNavigate } from "react-router-dom";

function Introduction() {
    const navigate = useNavigate();
    const [imagePath, setImagePath] = useState(faceimg1);
    const [pressed, setPressed] = useState(true);
    const [introText, setIntroText] = useState("Wow. I see. starting off with the big questions huh?");

    function clickButton() {
        setImagePath(faceimg2);
        setPressed(false);
        setIntroText("Well I'd be more than happy to introduce myself!");
    }
    
    return (
       <div className="container">
        <div className = "text-container">   
            <button className = "back"  onClick = {() => navigate('/main')}>&lt;</button>
            <h2 className = "title">{introText}</h2>
        </div>
        <div>
            <img className = "mainimg" src = {imagePath} alt = "Face rises"></img>
        </div>
        <div>
          <div className = "body-container">
            {pressed ? <div className = "button-container">
                <button onClick = {clickButton}>
                    &gt; Uhm.. Yea?!
                </button>
                <button onClick = {clickButton}>
                    &gt; Well Duh!
                </button>
            </div> : 
            <div>
                <p>I'm Brandon! I currently work at BCG. I like creating unique digital experiences and my goal is to contribute to meaningful work</p>
                <ul className = "intro-list">
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
                    <a href = "https://twitter.com/wuhoobrandon"><img className = "twitter social-icons" src = {twitter}></img></a>
                    <a href = "https://github.com/brandonlwu"><img className = "github social-icons" src = {github}></img></a>
                    <a href = "https://www.linkedin.com/in/brandon-w-293342133/"><img className = "linkedin social-icons" src = {linkedin}></img></a>
                </div>
            </div>
            }
          </div>
        </div>
        <div className = "spacer"></div>
      </div>
    );
  }
  
  export default Introduction;
  //comment for push