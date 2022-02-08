import React, { useState, useEffect } from 'react';
import img from '../assets/optimized-face-smile-blink.png'
import sequioa from '../assets/sequioa.png'
import agave from '../assets/agave.png'
import cactus from '../assets/cactus.png'
import { useNavigate } from "react-router-dom";
import LazyLoad from 'react-lazyload';
import { send } from 'emailjs-com';
import '../css/App.css'

function Pictures() {
    const navigate = useNavigate();
    const [imagePath, setImagePath] = useState(img);
    const [pressed, setPressed] = useState(true);
    const [introText, setIntroText] = useState("Well well well, hello there!");
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        message: '',
      });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    function handleSubmit(event) {
        event.preventDefault();
      }    

    return (
       <div className="container">
        <div className = "text-container">   
            <button className = "back"  onClick = {() => navigate('/main')}>&lt;</button>
            <h2 className = "title">{introText}</h2>
        </div>
        <div>
            <img className = "mainimg" src = {imagePath} alt = "Camera"></img>
        </div>
        <div>
          <h2>I'm excited to get to know you!
          </h2>
          <h2>P.s. please do say hi - even if you don't know me at all! And, if 
              we happen to be in the same place at the same time, let's grab a coffee!
          </h2>
        </div>
        <div className = "form-container">
            <form onSubmit={handleSubmit} id = "form">
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                {/* <textarea 
                    name = 'message' 
                    rows="6" cols="50" 
                    form="form" 
                    className = "text-area"
                    value={toSend.message} 
                    onChange={handleChange}>
                </textarea> */}
                <label className = "label">Very serious question – which plant are you?</label><br></br>
                <div className = "plant-container">
                    <label>
                        <input type="radio" name="test" value="small" checked/>
                        <img className = "plant-img" src = {sequioa}></img>
                    </label>
                    <label>
                        <input type="radio" name="test" value="small" checked/>
                        <img className = "plant-img" src = {agave}></img>
                    </label>
                    <label>
                        <input type="radio" name="test" value="small" checked/>
                        <img className = "plant-img" src = {cactus}></img>
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
        <div className = "spacer"></div>
      </div>
    );
  }
  
  export default Pictures;