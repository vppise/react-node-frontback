import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Student from './component/layout/Student'; 
import Navbar from './component/layout/Navbar'; 
import StudentData from './component/layout/StudentData'


const App = () =>
<Router>
<Fragment>
  <Navbar />
  <Route exact path='/' component={Student} />
  <Route path='/students' component={StudentData} />
</Fragment>
</Router>


export default App;
