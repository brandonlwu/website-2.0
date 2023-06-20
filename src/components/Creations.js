import '../css/App.css';
import React, { useState } from 'react';
import faceimg1 from '../assets/optimized-face-evil-button.png'
import { SocialIcon } from 'react-social-icons';
import { useNavigate } from "react-router-dom";

function Creations() {
    const navigate = useNavigate();
    const [imagePath, setImagePath] = useState(faceimg1);
    const [pressed, setPressed] = useState(true);
    const [introText, setIntroText] = useState("I was hoping you'd say that!");

    return (
       <div className="container">
        <div className = "text-container">   
            <button className = "back"  onClick = {() => navigate('/main')}>&lt;</button>
            <h2 className = "title">{introText}</h2>
        </div>
        <div>
            <img className = "mainimg" src = {imagePath} alt = "Evil face"></img>
        </div>
        <div>
          <h2>Here are some of the projects I'm most proud of - and also some which didn't go as well. But who knows I might pick it back up one day!</h2>
            <ul className = "intro-list">
            <li> <a href = "https://letsnft.me">
              <span style = {{color:'#FF6666'}}>N</span>
              <span style = {{color:'#6666FF'}}>F</span>-
              <span style = {{color:'#33CC33'}}>M</span>
              <span style = {{color:'#3399FF'}}>E </span>
              </a>
            - a web app for friends to create and share personalized NFT - "NF-ME" - versions of themselves</li>
            <li> <a href = "https://brandonlwu.github.io/play2020/" style = {{color: '#ffcc66'}}>play 2020</a> - a game inspired by 2048 but with a twist: my high school classmate's faces</li>
            <li> <a href = "https://sticks.brandonlwu.com" style = {{color: '#ff3333'}}>sticks and bones</a> - help alfred the ainu find the best stick! </li>
            <li> <a href = "https://crunchycranium.substack.com/" style = {{color: '#996600'}}>crunchy cranium chronicles</a> - mildly interesting thought nuggets </li>
            <li> <a href = "https://apps.apple.com/in/app/recess-vibe-out/id1566256162" style = {{color: '#5D5FEF'}}>recess</a> - an iOS app for friend groups at yale</li>
            <li><strike> world domination</strike></li>
           </ul>
        </div>
        <div className = "spacer"></div>
      </div>
    );
  }
  
  export default Creations;