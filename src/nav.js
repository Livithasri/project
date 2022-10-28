import React from "react";
import './nav.css';
import img from './download.jpg';

class Nav extends React.Component
{
    render(){
       return <>
       <div className="header">
            <h1 className="head">CHART YOUR ART</h1>
            <img src={img}/>
       </div>
       <ul className="size">
  <li><a href="/">HOME</a></li>
  <li><a href="/Contact">DRAWINGS</a></li>
  <li><a href="/App1">STORY</a></li>
  <li><a href="/story">CONTACT</a></li>
  <li><a href="/login">LOGIN</a></li>
  {/* <li><a href="/">ABOUT</a></li> */}
</ul>

</>

    }
}

export default Nav;