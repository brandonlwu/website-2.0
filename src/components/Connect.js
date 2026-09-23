import React, { useState, useEffect } from 'react';
import img from '../assets/optimized-face-smile-blink.png'
import sequioa from '../assets/sequioa.png'
import agave from '../assets/agave.png'
import cactus from '../assets/cactus.png'
import { useNavigate } from "react-router-dom";
import LazyLoad from 'react-lazyload';
import '../css/App.css'

// Google Apps Script web app that emails form submissions (see apps-script/README.md)
const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycby4hMd2CXjWkNL6F5WuFRks_aOKF9gQ7ZzF0hMNMaRl9JelU--IzwHLl67umBCldWng8A/exec';

function Pictures() {
    const navigate = useNavigate();
    const [imagePath, setImagePath] = useState(img);
    const [pressed, setPressed] = useState(true);
    const [introText, setIntroText] = useState("Well well well, hello there!");
    const [formText, setFormText] = useState("");
    const [sending, setSending] = useState(false);
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        message: '',
        plant:'',
        website: '',
      });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    function chooseSequioa() {
        setToSend({ ...toSend, 'plant': 'sequioa' })
    }
    function chooseAgave() {
        setToSend({ ...toSend, 'plant': 'agave' })
    }
    function chooseCactus() {
        setToSend({ ...toSend, 'plant': 'cactus' })
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (sending) return;
        if (toSend.name !== '' && toSend.email !== '' && toSend.plant !== '') {
            setSending(true);
            setFormText("Sending...");
            // text/plain keeps this a "simple" request, so Apps Script doesn't need to answer a CORS preflight
            fetch(FORM_ENDPOINT, {
              method: 'POST',
              headers: { 'Content-Type': 'text/plain;charset=utf-8' },
              body: JSON.stringify(toSend),
            })
            .then((response) => response.json())
            .then((result) => {
              if (!result.ok) throw new Error(result.error);
              setFormText("Received! Talk to you soon! :)");
              setToSend({ name: '', email: '', message: '', plant: '', website: '' });
            })
            .catch((err) => {
              console.log('FAILED...', err);
              setFormText("Hmm, that didn't go through. Please try again in a bit!");
            })
            .finally(() => setSending(false));
        } else {
            setFormText("Please fill out your name, email, and plant!");
        }
      }    

    return (
       <div className="container">
        <div className = "text-container">   
            <button className = "back"  onClick = {() => navigate('/main')}>&lt;</button>
            <h2 className = "title">{introText}</h2>
        </div>
        <div>
            <img className = "mainimg" src = {imagePath} alt = "Smiling face"></img>
        </div>
        <div>
          <h2>I'm excited to get to know you!
          </h2>
          <h2>P.s. please do say hi - even if you don't know me at all! And, if 
              we happen to be in the same place at the same time, let's grab a coffee!
          </h2>
        </div>
        <div className = "form-container">
            <form onSubmit={handleSubmit} id = "form" autocomplete= "off">
                <input
                    type='text'
                    name='name'
                    id = 'name-input'
                    placeholder='Name'
                    value={toSend.name}
                    onChange={handleChange}
                />
                <input
                    type='email'
                    name='email'
                    id = 'email-input'
                    placeholder='Email'
                    value={toSend.email}
                    onChange={handleChange}
                />
                <textarea 
                    name = 'message' 
                    id = 'message-input'
                    rows="6" cols="50" 
                    form="form" 
                    className = "text-area"
                    value={toSend.message} 
                    onChange={handleChange}>
                </textarea>
                {/* Honeypot for spam bots: hidden from people, so only bots fill it in */}
                <input
                    type='text'
                    name='website'
                    value={toSend.website}
                    onChange={handleChange}
                    tabIndex='-1'
                    autoComplete='off'
                    aria-hidden='true'
                    style={{ position: 'absolute', left: '-9999px' }}
                />
                <label className = "label">Very serious question - which plant are you?</label><br></br>
                <div className = "plant-container">
                    <label>
                        <input id = 'seq-input' type="radio" name='plant' value='sequioa' checked={toSend.plant === 'sequioa'} onChange={chooseSequioa}/>
                        <img className = "plant-img" src = {sequioa}></img>
                    </label>
                    <label>
                        <input id = 'agave-input' type="radio" name='plant' value='agave' checked={toSend.plant === 'agave'} onChange={chooseAgave}/>
                        <img className = "plant-img" src = {agave}></img>
                    </label>
                    <label>
                        <input id = 'cactus-input' type="radio" name='plant' value='cactus' checked={toSend.plant === 'cactus'} onChange={chooseCactus}/>
                        <img className = "plant-img" src = {cactus}></img>
                    </label>
                </div>
                <input type="submit" value="Submit" disabled={sending} />
                <h2 className = "form-message">{formText}</h2>
            </form>
        </div>
        <div className = "spacer"></div>
      </div>
    );
  }
  
  export default Pictures;