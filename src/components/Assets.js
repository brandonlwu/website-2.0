import '../css/App.css';
import React from 'react';
import book from '../assets/book.png'
import home from '../assets/home.png'
import connect from '../assets/coffee.png'
import camera from '../assets/camera.png'
import projects from '../assets/projects.png'

function Assets() {
    return(
        <div>
            <a href = "https://twitter.com/wuhoobrandon"><img className = "twitter social-icons" src = {book}></img></a>
            <a href = "https://twitter.com/wuhoobrandon"><img className = "twitter social-icons" src = {home}></img></a>
            <a href = "https://twitter.com/wuhoobrandon"><img className = "twitter social-icons" src = {connect}></img></a>
            <a href = "https://twitter.com/wuhoobrandon"><img className = "twitter social-icons" src = {projects}></img></a>
            <a href = "https://twitter.com/wuhoobrandon"><img className = "twitter social-icons" src = {camera}></img></a>
            <img src = {book}/>
            <img src = {home}/>
            <img src = {connect}/>
            <img src = {camera}/>
            <img src = {projects}/>
        </div>
    )
}
export default Assets;