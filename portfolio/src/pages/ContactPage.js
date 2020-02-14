import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function ContactPage() {

    return (
        <div>
            <Hero />

            <Content>
                <div>
                    <h1>Contact Me: </h1>
                    <br />
                    <span>
                        <i class="far fa-envelope-open"></i>
                        tle449@gmail.com
                    </span>
                    <br />
                    <br />
                    <span >
                        <i class="fab fa-linkedin"></i>
                        <a href="https://www.linkedin.com/in/tu-tai-le-2a9646139/">LinkedIn</a>
                    </span>
                    <br />
                    <br />
                    <span>
                        <i class="fab fa-github"></i>
                        <a href="https://github.com/TaiLe96">GitHub</a>
                    </span>
                </div>
            </Content>
        </div>
    );

}

export default ContactPage;