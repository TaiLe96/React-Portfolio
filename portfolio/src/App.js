import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Card from "./components/Card"

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
      <div>
      <div>Testing</div>
      <Card/>
      </div>
    )
  }
}

export default App;
