import '../css/App.css';
import React, { useState } from 'react';
import faceimg1 from '../assets/optimized-face-serious.png'
import faceimg2 from '../assets/optimized-face-smile-blink.png'
import github from '..//assets/github.png'
import linkedin from '..//assets/linkedin.png'
import twitter from '..//assets/twitter.png'
import email from '..//assets/email.png'
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
                <p>I'm Brandon! I'm currently a junior at Yale. I plan to study Computer Science and Humanities. I hope to one day create something meaningful</p>
                <ul className = "intro-list">
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
                        <span className = "andermann link">
                        <a href = "https://www.andermannlab.com/" target = "_blank"> andermann lab</a>
                        </span>
                    </li>
                    <li>In my free time I enjoy riffing on the piano, starting but never actually finishing a good novel, and eating great mangoes.</li>
                </ul>
                <div className = 'socials'>
                    <a href = "mailto:brandon.wu@yale.edu"><img className = "email social-icons" src = {email}></img></a>
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