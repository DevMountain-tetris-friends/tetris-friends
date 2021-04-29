import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from './Components/mainPage/MainPage';
import Tetris from './Components/gameMarathon/tetris';
import Login from './Components/Login/Login';



export default(
    <Switch> 
        <Route component={Login} exact path='/'/>
        <Route component={MainPage} path ='/mainpage'/>
        <Route component={Tetris} path='/tetris' />
    </Switch>
)