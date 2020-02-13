import React from "react";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstap/Row";

import dinerparty from "../assets/images/dinerparty.png";
import fitnesstracker from "../assets/images/fitnesstracker.png";
import notetaker from "../assets/images/notetaker.png";
import passwordgen from "../assets/images/passwordgen.png";
import templategengine from "../assets/images/templategengine.png";

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Note Taker",
                    subTitle: "",
                    imgSrc: notetaker,
                    link: "https://github.com/TaiLe96/note-taker"
                },
                {
                    id: 1,
                    title: "Diner Party",
                    subTitle: "",
                    imgSrc: dinerparty,
                    link: "https://github.com/kokevin678/Dinner_Party"
                },
                {
                    id: 2,
                    title: "Password Generator",
                    subTitle: "",
                    imgSrc: passwordgen,
                    link: "https://github.com/TaiLe96/password-generator"
                },
                {
                    id: 3,
                    title: "Fitness Tracker",
                    subTitle: "",
                    imgSrc: fitnesstracker,
                    link: "https://github.com/TaiLe96/fitness-tracker"
                },
                {
                    id: 4,
                    title: "Template Engine",
                    subTitle: "",
                    imgSrc: templategengine,
                    link: "https://github.com/TaiLe96/template-engine"
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let item = [...this.state.items];

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