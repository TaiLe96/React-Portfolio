import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Icon } from 'antd';
import "../styles/ContactPage.css";

function ContactPage() {

    return (
        <div>
            <Hero />

            <Content>
                <div>
                    <h1>Contact Me: </h1>
                    <br />
                    <span>
                    <Icon type="mail" className='icon color'/> tle449@gmail.com
                    </span>
                    <br />
                    <br />
                    <span >
                    <Icon type="linkedin" className='icon' /><a href="https://www.linkedin.com/in/tu-tai-le-2a9646139/"> LinkedIn</a>
                        
                    </span>
                    <br />
                    <br />
                    <span>
                    <Icon type="github" className='icon'/><a href="https://github.com/TaiLe96"> GitHub</a>
                    </span>
                </div>
            </Content>
        </div>
    );

}

export default ContactPage;