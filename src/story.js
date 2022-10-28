import React from "react";
import './story.css';
import img2 from './images2.jpg';
import img3 from './images3.jpg';
import Nav from './nav';
function Story()
{
    return <>
    <ul className="size">
  <li><a href="/">HOME</a></li>
  <li><a href="/Contact">DRAWINGS</a></li>
  <li><a href="/App1">STORY</a></li>
  <li><a href="/story">CONTACT</a></li>
  <li><a href="/login">LOGIN</a></li>
  {/* <li><a href="/">ABOUT</a></li> */}
</ul>
    <div className="cont">
    <div className="nar">
        <h1>HEAR STORY AND RHYMES HERE</h1>
        </div>
        <br/>
        <img src={img2}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       <h1>CLICK DOWN TO SEE STORIES AND RHYMES</h1> <span className="arrow">&#8595;</span>
       <a href="https://youtube.com/watch?v=fuUgOBV1rlw&feature=share&si=EMSIkaIECMiOmarE6JChQQ"><h1>STORIES</h1></a>
       <a href="https://youtube.com/watch?v=sNyF7BvVfxs&feature=share&si=EMSIkaIECMiOmarE6JChQQ"><h1>RHYMES</h1></a>
        
        <br/>
       <audio controls/>
       <div className="nar1">
  <source src="horse.ogg" type="audio/ogg"/>
  <source src="horse.mp3" type="audio/mpeg"/>
  <br/>
  </div>
  <img src={img3}/>
  </div>
    </>
}
export default Story;