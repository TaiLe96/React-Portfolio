import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Card from "./components/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Tai M. Le",
      headerLinks: [
        {title: "About", path: "/"},
        {title: "Portfolio", path: "/portfolio"},
        {title: "Contact", path: "/contact"}
      ],
      About: {
        title: "About Me"
      },
      Portfolio: {
        title: "Portfolio"
      },
      Contact: {
        title: "My Contact"
      }
    }
  }

  render(){
    return(
      <Router>
        <Container className="p-0" fluid={true}>

        </Container>
      </Router>
    )
  }
}

export default App;
