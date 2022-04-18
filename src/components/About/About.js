import React from 'react';
import './About.css';
import mypic from '../../../src/Images/mypic/mypic.jpg';
const About = () => {
    return (
        <div className='about-us'>
            <div>
                <img src={mypic} alt="" />
            </div>
            <div className='about-text'>
                <h1>Fahim Rimon</h1>
                <h6>Developer <span>& Designer</span></h6>
                <p>I am a front-end web developer. I also make the website more & more interactive <br /> with web animation. I also make responsive design for any website. There are many <br /> goals that may have as a web developer like creating visually appealing and user- <br /> friendly websites, developing sites that are optimized for search engine ranking, and <br /> ensuring that websites are properly coded and functional. </p>
                <button className='btn btn-danger'>Let's Talk</button>
            </div>
        </div>
    );
};

export default About;