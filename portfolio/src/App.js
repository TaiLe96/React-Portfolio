import React, {Component} from 'react';
import Header from "./components/Header";

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
// import Card from "./components/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import './App.css';

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     title: "Tai M. Le",
  //     headerLinks: [
  //       {title: "About", path: "/"},
  //       {title: "Portfolio", path: "/about"},
  //       {title: "Contact", path: "/contact"}
  //     ],
  //     Home: {
  //       title: "Hello Everyone",
  //       subTitle: 'Checkout my projects below',
  //       text: 'Checkout my projects below'
  //     },
  //     About: {
  //       title: "Portfolio"
  //     },
  //     Contact: {
  //       title: "My Contact"
  //     }
  //   }
  // }

//   render(){
//     return(
//       <Router>
//         <Container className="p-0" fluid={true}>
//           <Navbar className="border-bottom" bg="transparent" expand="lg">
//             <Navbar.Brand>Tai M. Le</Navbar.Brand>
//             <Navbar.Toggle className="border-0" aria-controls="navbar-toggle">
//             <Navbar.Collapse id="navbar-toggle">
//               <Nav className="ml-auto">
//                 <Link className="nav-link" to="/">Home</Link>
//                 <Link className="nav-link" to="/about">About</Link>
//                 <Link className="nav-link" to="/contact">Contact</Link>
//               </Nav>
//             </Navbar.Collapse>              
//             </Navbar.Toggle>
//           </Navbar>

//           <Route path="/" exact render={() => <HomePage title={this.state.Home.title} subTitle={this.state.Home.subTitle} text={this.state.Home.text} />} />
//           <Route path="/about" render={() => <AboutPage title={this.state.About.title} />} />
//           {/* <Route path="/contact" render={() => <ContactPage title={this.state.Contact.title} />} /> */}

//         </Container>
//       </Router>
//     )
//   }
// }
  render(){
    return(
      <div className="App">
        <Header/>
      </div>
    )
  }
}
export default App;
