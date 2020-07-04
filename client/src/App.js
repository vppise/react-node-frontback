import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Student from './component/layout/Student'; 
import Navbar from './component/layout/Navbar'; 


const App = () =>
<Router>
<Fragment>
  <Navbar />
  <Route exact path='/' component={Student} />
</Fragment>
</Router>


export default App;
