import React, { Component } from "react"
import { Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Body from './Body';
import Setting from './Setting';
class App extends Component {
  render() {
    return (
      <div className="App">
       <BrowserRouter> 
   <Route exact path="/" component={Body} />
   <Route exact path="/setting" component={Setting} />
    </BrowserRouter>
</div>
    );
  }
}

export default App
