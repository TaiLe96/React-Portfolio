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
            <p>Hello, my name is Tai. I graduated from University of California, Riverside with a Business Economics degree in 2019.</p>

            <p>I'm currently learning full-stack coding at University of California, Berkeley extension and will be finished by the end of Feburary.</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS,</p>

            <p>and NodeJs. </p>

            <p></p>
            </Content>
        </div>
    );

}

export default AboutPage;