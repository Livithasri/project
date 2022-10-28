import React from 'react';
import ReactDOM from 'react-dom/client';
import './head.css';
import image from './images.jpg';
import img1 from './fox.jpeg';
import img2 from './wolf.jpeg';

function Head()
{
    return <React.Fragment>
        <div className='head'>
            <div>
             <img className='img'src={image}/> 
             </div>
             <br/>
             <br/>
             <div>
            <div className='left'>
            <h1>GREAT WELCOME AND WISHES FOR JOINING AS A PART OF THIS WORLD.....THIS YOUR WORLD!!!!!!!YOU CAN POST YOUR ART SKILLS HERE .....</h1>
            <h2>When we celebrate Christmas, it’s always on December 25. But although Easter is always in spring and always on Sunday, it can come at very different times during the spring season. Have you ever wondered why some years we celebrate Easter at the beginning of April, other times in the middle of April, and sometimes at the end of March?

It is all because of the moon.
The moon determines the date for Easter because Easter always falls on the Sunday following the first full moon after the advent of spring, which comes on March 20.

Since there is a rabbit on the moon, and story tellers in the East were aware of it, do you think the bunny on the moon might have some relationship to the concept of the Easter bunny?  Or is it just a coincidence?

 </h2>
<img src={img2}/>
        </div>
         <div className='right'>
            <img className='img2'src={img1}/>
            <h1>The Fox and The Stork</h1>
            <h2>A selfish fox once asked a stork to dinner. The invitation made Stork very delighted, and she arrived at the fox’s house on time, knocking on the door with her long beak. The fox escorted her to the supper table and gave them both soup in shallow bowls. She couldn’t eat any soup since the bowl was too shallow for her. The fox, on the other hand, quickly lapped up his soup.

The stork was upset and irritated, but she didn’t show it. She asked the fox to supper the next day to teach him a lesson. She served soup in two tall thin vases, as well. The stork sipped the soup from the vase, but the fox was unable to do so due to his small neck. The fox realized he had made a mistake. </h2>
        
        <br/>
        <br/>
        <br/>
        <h2>Moral of the story: Never be selfish.</h2>
        <h2>A boy and his father lived in a village. While the sheep grazed in the fields, the boy’s father instructed him to keep an eye on them. He had to take the sheep to the grassy fields every day. The boy,.......... </h2>
        </div> 
        </div>
        </div>
    </React.Fragment>
}
export default Head;