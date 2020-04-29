import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

import {Col} from 'antd'
import CardDisplay from './CardDisplay';
import Content from './postDescription/Content';
import Category from './Category';
import HeaderBlog  from './Header';   

export class MainRoute extends Component {
  render() {
    return (
      <Router>
 
            <Switch>
              <Route exact path="/"><CardDisplay/></Route>
              <Route exact path='/Category/:type/Key=:id' component={Content}/>
            </Switch>
      </Router>
    )
  }
}

export default MainRoute
