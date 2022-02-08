import '../css/App.css';
import React, { useState } from 'react';
import mainimg from '../assets/face.png'
import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();
    return (
      <div className="container">
        <div className = "text-container">
          <button className = "back"  onClick = {() => navigate('/')}>&lt;</button>
          <h2 className = "title">Hey there! I'm Brandon. Nice to meet you!</h2>
        </div>
        <div>
          <img className = "mainimg" src = {mainimg} alt = "Sleeping under a tree"></img>
        </div>
        <div>
          <div className = "body-container">
            <p>I can answer any questions you have - and then I want to get to know you a bit more!</p>
          </div>
          <div className = "tab-container">
            <button onClick = {() => navigate('/intro')}>&gt; So... who exactly are you?</button>
            <button onClick = {() => navigate('/creations')}>&gt; Enough talk! I want to see something YARGHHH!!</button>
            <button onClick = {() => navigate('/pictures')}>&gt; I can't read! Do you have any cool pictures?</button>
            <button onClick = {() => navigate('/words')}>&gt; I can read! Where the words at?</button>
            <button onClick = {() => navigate('/connect')}>&gt; I want to introduce myself IN PLANT FORM</button>
          </div>
        </div>
        <div className = "spacer"></div>
      </div>
    );
  }
  
  export default MainPage;