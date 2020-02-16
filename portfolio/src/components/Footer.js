import React from "react";
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap"

function Footer(){
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3"></Row>
                <p style={{textAlign:"center"}}>Made by Tai Le</p>
            </Container>
        </footer>
    )
}

export default Footer;