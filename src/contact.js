// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './head.css';

// function Contact()
// {
//     return <React.Fragment>
//         <div className='head'>
             
           
//             <div className='left'>
//             <p>hii</p>
//             <div className='container login-container'>
//       <div className='row '>
//       <div className="col-lg-6 offset-lg-3">
//       <div className="card shadow">

//   <div className="card-body card-container">
 
       
//   <h2 className='kec-container'><i className="fa-solid fa-users"></i> KEC Social Media</h2>
  
//     <form action="">
//     <div className='mb-3'>
//   <label htmlFor="mail"></label>
//       <input type="text" placeholder=' Email' className='form-control'/>
//       </div>
//       <div className='mb-3'>
//   <label htmlFor="fname"></label>
//       <input type="text" placeholder='Full Name' className='form-control'/>
//       </div>
//       <div className='mb-3'>
//   <label htmlFor="uname"></label>
//       <input type="text" placeholder='Username' className='form-control'/>
//       </div>
//       <div className='mb-3'>
//       <label htmlFor="pword"></label>
//       <input type="password" name="" id="" placeholder='Password' className='form-control' />
//       </div>
//       <div className='d-grid gap-6'>
//       <button type="button" class="btn btn-primary ">Sign Up</button>
//       </div>
    
//       </form>
//   </div>
// </div>
//       </div>
//       </div>
//     </div>
//         </div>
//         <div className='right'>
//             <p>hii</p>
//         </div>
//         </div>
//     </React.Fragment>
// }
// export default Contact;

import React from "react";
import './contact.css';
import img from './download.png';
import img1 from './images1.jpg';
import Nav from './nav';

function Contact(){
    return <React.Fragment>
        <ul className="size">
  <li><a href="/">HOME</a></li>
  <li><a href="/Contact">DRAWINGS</a></li>
  <li><a href="/App1">STORY</a></li>
  <li><a href="/story">CONTACT</a></li>
  <li><a href="/login">LOGIN</a></li>
  {/* <li><a href="/">ABOUT</a></li> */}
</ul>

        <div className="form1">
            <div className="inform">
                <h1 className="heading">CHART YOUR ART</h1>
                <img src={img1}/>
            </div>
        <form class="form p-4" method="get" name="myform" action="">
            <img src={img}/>
            ENTER YOUR BEAUTIFUL NAME:
            <input class="form-control m-2" type="text"></input>

            <br></br>
           
            GENDER:
            <input class="form-control m-2" type="text"/>
            
            PHONE:
            <input class="form-control m-2" type="phone"></input>
            UPLOAD YOUR ART:
            <input class="form-control m-2" type="file" />
            COUNTRY:
            <select class="form-control m-2" name="country">
                <option value="">India</option>
                <option value="">China</option>
                <option value="">Indonesia</option>
                <option value="">Srilanka</option>
            </select>
            
         <a href="confettis-p5-js/confettis-p5-js/dist/index.html">   <button type="submit" class=" btn btn-primary padding-top">Submit</button></a>
           
        </form>
       </div>
    </React.Fragment>

}
export default Contact;