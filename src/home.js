import React from 'react';
import ReactDOM from 'react-dom/client';
import './home.css';
import Head from './head';
import Nav from './nav';
import Ro from './route';
import Login from './login';
function Home()
{
    return <React.Fragment>
        <body>
            <div className='class1'>
            
                <Nav/>
                <Head/>
            </div>
        </body>
  </React.Fragment>
}
export default Home;