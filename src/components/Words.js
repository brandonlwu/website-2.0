import '../css/Words.css';
import React, { useState } from 'react';
import reading from '../assets/optimized-reading.png'
import { useNavigate } from "react-router-dom";

function Words() {
    const navigate = useNavigate();
    const [imagePath, setImagePath] = useState(reading);
    const [pressed, setPressed] = useState(true);
    const [introText, setIntroText] = useState("BEEP BOOP BEEP. CHANGING FONT FOR READABILITY");

    return (
       <div className="container">
        <div className = "text-container">   
            <button className = "back"  onClick = {() => navigate('/main')}>&lt;</button>
            <h3 className = "title">{introText}</h3>
        </div>
        <div>
            <img className = "mainimg" src = {imagePath} alt = "Evil face"></img>
        </div>
        <div>
          <h3 className = "title">Welcome to my cozy reading room!</h3><br></br>
          <h3>Books and short stories I've enjoyed</h3>
          <ul className = "words">
            <li>Tomorrow, and Tomorrow, and Tomorrow
              <span class = "author"> by Gabrielle Zevin</span>
              <span class = "quote">"To allow yourself to play with another person is no small risk. 
              It means allowing yourself to be open, to be exposed, to be hurt."</span>
            </li>
            <li>Man's Search for Meaning
              <span class = "author"> by Viktor Frankl</span>
            </li>
            <li>On Earth We're Briefly Gorgeous
              <span class = "author"> by Ocean Vuong</span>
            </li>
            <li>The Kite Runner
              <span class = "author"> by Khaled Hosseini</span>
            </li>
            <li>Crying in H Mart
              <span class = "author"> by Michelle Zauner</span>
            </li>
            <li>Recitatif
              <span class = "author"> by Toni Morrison</span>
            </li>
            <li>The Overstory
              <span class = "author"> by Richard Powers</span>
            </li>
            <li>Pachinko
              <span class = "author"> by Min Jin Lee</span>
              <span class = "quote">"People are awful. Drink some beer."</span>
            </li>
            <li>Persepolis
              <span class = "author"> by Marjane Satrapi</span>
            </li>
            <li>Humans of New York
              <span class = "author"> by Brandon Stanton</span>
            </li>
            <li>The Stranger
              <span class = "author"> by Albert Camus</span>
            </li>
            <li>All the Light We Cannot See
              <span class = "author"> by Anthony Doerr</span>
              <span class = "quote">"What do we call visible light? We call it color. 
                But the electromagnetic spectrum runs to zero in one direction
                 and infinity in the other, so really, children, 
                 mathematically, all of light is invisible."</span>
            </li>
            <li>When Breathe Becomes Air
              <span class = "author"> by Paul Kalanithi</span>
            </li>
            <li>The Lathe of Heaven
              <span class = "author"> by Ursula K. Le Guin</span>
              <span class = "quote">"Current-borne, wave-flung, 
              tugged hugely by the whole might of ocean, 
              the jellyfish drifts in the tidal abyss."</span>
            </li>
            <li>The Paper Menagerie
              <span class = "author"> by Ken Liu</span>
            </li>
            <li>Everything I never told you
              <span class = "author"> by Celeste Ng</span>
            </li>
          </ul>
          {/* <h3>Writing</h3>
          <ul className = "words">
            <li>Yale School of Medicine Emergency Medicine Chair forced from position, according to faculty
              <span class = "author"> Yale Daily News</span>
            </li>
            <li>School of Public Health faculty and students call for vision and autonomy ahead of dean’s departure
              <span class = "author"> Yale Daily News</span>
            </li>
          </ul> */}
        </div>
        <div className = "spacer"></div>
      </div>
    );
  }
  
  export default Words;