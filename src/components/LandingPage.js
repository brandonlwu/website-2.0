import '../css/App.css';
import mainimg1 from '../assets/optimized-chilling.png'
import mainimg2 from '../assets/optimized-apple-unlooped.png'
import apple_button from '../assets/apple_button.png'
import React, { useState } from 'react';
import MainPage from './MainPage'
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const [imagePath, setImagePath] = useState(mainimg1);
    const [introText, setIntroText] = useState("Welcome to my nook of the web! Don't mind me, just resting my eyes for a bit...")
    const button = <img className = "apple_button" src = {apple_button}></img>
    const [buttonText, setButtonText] = useState(button);
    const [stage, setStage] = useState(false);
    const navigate = useNavigate();
    function pokeBrandon() {
        if (stage == true) {
            navigate('/main')
        } else {
            setIntroText("Alright, alright! I'm awake now");
            setImagePath(mainimg2);
            setButtonText("> Let's take the scenic route (for optimal experience)");
            setStage(true);
        }
    }

    return (
        <div className="container">
        <div className = "text-container">
          <h2>{introText}</h2>
        </div>
        <div>
          <img className = "no-select mainimg" src = {imagePath} alt = "Sleeping under a tree"></img>
        </div>
        <div className = "button-container">
          <button onClick = {pokeBrandon}>
            {buttonText}
          </button>
          {stage ? <button className = "condensed" onClick = {() => navigate('/condensed')}>&gt; Cut to the chase!</button>:null}
        </div>
        <div className = "spacer"></div>
      </div>
    );
  }
  
  export default LandingPage;