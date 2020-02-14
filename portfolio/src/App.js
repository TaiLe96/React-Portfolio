import React from "react"
import "./App.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";
import ContactPage from "../src/pages/ContactPage";

class App extends React.Component {

  constructor(props){
        super(props);
        this.state = {
          title: "Tai M. Le",
          headerLinks: [
            {title: "About", path: "/"},
            {title: "Portfolio", path: "/about"},
            {title: "Contact", path: "/contact"}
          ],
          home: {
            title: "Hello Everyone",
            subTitle: 'Checkout my projects below'
          },
          about: {
            title: "Portfolio"
          },
          contact: {
            title: "My Contact"
          }
        }
      }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand></Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.about.title} />} />
          {/* <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} /> */}

          </Container>
      </Router>
        )
      }
    }
    
export default App;