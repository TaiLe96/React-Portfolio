import React from "react";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import diner from "../assets/images/diner.png";
import tracker from "../assets/images/tracker.png";
import notetaker from "../assets/images/notetaker.png";
import password from "../assets/images/password.png";
import templateengine from "../assets/images/templateengine.png";

class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Fitness Tracker",
                    subTitle: "JavaScript, NodeJS, Express, Mongoose, MongoDB",
                    imgSrc: tracker,
                    link: "https://github.com/TaiLe96/fitness-tracker",
                    selected: false
                },
                {
                    id: 1,
                    title: "Diner Party",
                    subTitle: "HTML, CSS, JavaScript, jQuery, API",
                    imgSrc: diner,
                    link: "https://github.com/kokevin678/Dinner_Party",
                    selected: false
                },
                {
                    id: 2,
                    title: "Password Generator",
                    subTitle: "HTML, CSS, JavaScript",
                    imgSrc: password,
                    link: "https://github.com/TaiLe96/password-generator",
                    selected: false
                },
                {
                    id: 3,
                    title: "Note Taker",
                    subTitle: "JavaScript, NodeJs, Express",
                    imgSrc: notetaker,
                    link: "https://github.com/TaiLe96/note-taker",
                    selected: false
                },
                {
                    id: 4,
                    title: "Template Engine",
                    subTitle: "HTML, CSS, JavaScript",
                    imgSrc: templateengine,
                    link: "https://github.com/TaiLe96/template-engine",
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    };

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}
export default Carousel;