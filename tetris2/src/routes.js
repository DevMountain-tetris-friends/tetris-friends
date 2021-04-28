import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import Tetris from './Components/gameMarathon/Tetris';
import Login from './Components/Login/Login';



export default(
    <Switch> 
        <Route component={Login} exact path='/'/>
        <Route component={MainPage} path ='/mainpage'/>
        <Route component={Tetris} path='/tetris' />
    </Switch>
)