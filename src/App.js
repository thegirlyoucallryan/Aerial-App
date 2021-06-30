import React from 'react';

import classes from './index.css';
import background from './components/background.png';
import Home from './components/Home';
import AddNew from './components/AddNew';
import TrainingDay from './components/TrainingDay';
import MainNavigation from './components/Layout/MainNavigation';
import { Route, Switch } from 'react-router';


import './index.css'






function App (){
 
   return(
       <div className={classes.background} style={{backgroundImage: `url(${background})`, height: '100vh', backgroundAttachment: 'fixed'}}>
    <MainNavigation></MainNavigation>
    <Switch>
      <Route path='/' exact><Home/></Route>
      <Route path='/add-new' exact><AddNew/></Route>
      <Route path='/trainingday' exact><TrainingDay/></Route>

       </Switch>
       </div>
   )

   
}

export default App;