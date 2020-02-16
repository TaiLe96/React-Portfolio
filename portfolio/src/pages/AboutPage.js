import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero/>

            <Content>
            <h1>About me</h1>

            <img src=""></img>
            <p>Hello, my name is Tai and currently living in San Francisco. I graduated from University of California, Riverside with a</p>
            
            <p>Business Economics degree in 2019. I'm currently learning full-stack at University of California, Berkeley extension and will</p>
            
            <p>be finished by the end of Feburary. As self-motivated and hardworking individual, I'm looking for a full-time position where I can</p>
            
            <p>gain more experience with MongoDB, React, Express JS, and NodeJs.</p>
            
            </Content>
        </div>
    );

}

export default AboutPage;