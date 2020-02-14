import React, {Component} from "react";

export default class About extends Component {
    render() {
        // let resumeData = this.props.resumeData;
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="" alt="" />
                    </div>

                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>I was born and lived in Vietnam for about 13 years. In 2008, my family decided to moved to the United States. It was an excited moment of my life, also a culture shock for me since I barely knew any English. So, I spent the first two years learning English. I graduted from Lincoln High School and got accepted into UCR in 2015. As you can see from the picture, I graduted college with a B.A in Business Economics.</p>
                        <p>I have been looking for jobs since graduation but it was a challenge. So I decided to join coding bootcamp at UCB Extension with the hope to increase job opportunities.</p>
                    </div>

                    {/* <div className="row">
                        <div className="columns contact-details">

                        </div>
                    </div> */}
                </div>
            </section>
        )
    }
}