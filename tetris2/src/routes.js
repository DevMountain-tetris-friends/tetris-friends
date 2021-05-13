import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import Tetris from './Components/GameMarathon/Tetris';
import Login from './Components/Login/Login';
import About from './Components/MainPage/About/About'
import Contact from './Components/MainPage/Contact/Contact'



export default(
    <Switch> 
        <Route component={Login} exact path='/'/>
        <Route component={MainPage} path ='/mainpage'/>
        <Route component={Tetris} path='/tetris' />
        <Route component={About} path='/about' />
        <Route component={Contact} path='/contact' />
    </Switch>
)