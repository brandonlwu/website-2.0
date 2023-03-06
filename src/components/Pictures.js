import React, { useState, useEffect } from 'react';
import camera from '../assets/optimized-camera.png'
import img1 from '../assets/pics/1.jpeg'
import img2 from '../assets/pics/2.jpeg'
import img3 from '../assets/pics/3.jpeg'
import img4 from '../assets/pics/4.jpeg'
import img5 from '../assets/pics/5.jpeg'
import img6 from '../assets/pics/6.jpeg'
import img7 from '../assets/pics/7.jpeg'
import img8 from '../assets/pics/8.jpeg'
import img9 from '../assets/pics/9.jpeg'
import img10 from '../assets/pics/10.jpeg'
import img11 from '../assets/pics/11.jpeg'
import img12 from '../assets/pics/12.jpeg'
import img13 from '../assets/pics/13.jpeg'
import '../css/Image.css'
import { useNavigate } from "react-router-dom";
import LazyLoad from 'react-lazyload';

function Pictures() {
    const navigate = useNavigate();
    const [imagePath, setImagePath] = useState(camera);
    const [pressed, setPressed] = useState(true);
    const [introText, setIntroText] = useState("No need to be ashamed. I can't read either!");

    // useEffect(() => {
    //   window.scrollTo(0, 0)
    // }, [])

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
          <h2>Nice! Lookin real spiffy!
          </h2>
          <h2>Someone once told me that a camera is one of
            the best investments you can make. Honestly I have to agree. 
            High quality pictures of high quality friends are underrated.</h2>
        </div>
        <div className = "polaroid-wall">
          <div className = "polaroid-col">
            <LazyLoad><img className = "polaroid" src = {img4}></img></LazyLoad>
            <LazyLoad><img className = "polaroid" src = {img2}></img></LazyLoad>
            <LazyLoad><img className = "polaroid" src = {img9}></img></LazyLoad>
            <LazyLoad><img className = "polaroid" src = {img10}></img></LazyLoad>
            <LazyLoad><img className = "polaroid" src = {img13}></img></LazyLoad>
          </div>
          <div className = "polaroid-col">
          <LazyLoad><img className = "polaroid" src = {img3}></img></LazyLoad>
          <LazyLoad><img className = "polaroid" src = {img5}></img></LazyLoad>
          <LazyLoad><img className = "polaroid" src = {img6}></img></LazyLoad>
          <LazyLoad><img className = "polaroid" src = {img11}></img></LazyLoad>
          </div>
          <div className = "polaroid-col">
          <LazyLoad><img className = "polaroid" src = {img7}></img></LazyLoad>
          <LazyLoad><img className = "polaroid" src = {img12}></img></LazyLoad>
          <LazyLoad><img className = "polaroid" src = {img1}></img></LazyLoad>
          <LazyLoad><img className = "polaroid" src = {img8}></img></LazyLoad>
          </div>
        </div>
        <div className = "spacer"></div>
      </div>
    );
  }
  
  export default Pictures;