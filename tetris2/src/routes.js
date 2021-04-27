import React from 'react';
import {Switch, Route} from 'react-router-dom';
import mainPage from './Components/mainPage/mainPage';
import tetris from './Components/gameMarathon/tetris';



export default(
    <Switch> 
        <Route component={mainPage} exact path ='/'/>
        <Route component={tetris} path='/tetris' />
    </Switch>
)