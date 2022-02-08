import '../css/App.css';
import React, { useState } from 'react';
import faceimg1 from '../assets/face_smile.png'
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
                <p>I'm Brandon! I'm currently a sophomore at Yale. I plan to study Computer Science and Humanities. I plan to one day create something meaningful</p>
                <ul className = "condensed">
                    <li>At the moment, I work at 
                        <span className = "athelas link">
                        <a href = "https://www.athelas.com/" target="_blank"> Athelas</a>
                        </span>, write for the
                        <span className = "yale link">
                        <a href = "https://yaledailynews.com/" target="_blank"> yale daily news</a>
                        </span>, and run 
                        <span className = "nfme link">
                        <a href = "https://letsnft.me/" target="_blank"> letsnft.me</a>
                        </span>
                    </li>
                    <li>In the past, I studied abroad as a
                        <span className = "yale link">
                        <a href = "https://light.yale.edu/" target = "_blank"> light fellow</a>
                        </span> + did summer research at the
                        <span className = "link">
                        <a href = "https://www.andermannlab.com/" target = "_blank"> andermann lab</a>
                        </span>
                    </li>
                    <li>In my free time I enjoy riffing on the piano, starting but never finishing a good novel, and eating great taco truck tacos.</li>
                </ul>
                <div className = "condensed">
                <h2 className = "condensed">Here are some of the projects I'm most proud of - and also some which didn't go as well. But who knows I might pick it back up one day!</h2>
                    <ul className = "intro-list condensed">
                    <li> <a href = "https://letsnft.me">
                    <span style = {{color:'#FF6666'}}>N</span>
                    <span style = {{color:'#6666FF'}}>F</span>-
                    <span style = {{color:'#33CC33'}}>M</span>
                    <span style = {{color:'#3399FF'}}>E </span>
                    </a>
                    - a web app for friends to create and share personalized NFT - "NF-ME" - versions of themselves</li>
                    <li> <a href = "https://brandonlwu.github.io/play2020/" style = {{color: '#ffcc66'}}>play 2020</a> - a game inspired by 2048 but with a twist: my high school classmate's faces</li>
                    <li> <a href = "https://apps.apple.com/in/app/recess-vibe-out/id1566256162" style = {{color: '#5D5FEF'}}>recess</a> - an iOS app for friend groups at yale</li>
                    <li><strike className = "condensed"> world domination</strike></li>
                </ul>
                </div>
                <div className = 'socials'>
                    <SocialIcon className = "social-icons" url = "mailto:brandon.wu@yale.edu" network="email" style={{ height: 60, width: 60 }} />
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