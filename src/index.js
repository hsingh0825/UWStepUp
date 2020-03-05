import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navBar';
import DailyStretch from './stretchContainers/dailyStretch';
import WeekStretch from './stretchContainers/weekStretch';



ReactDOM.render(
    <Fragment>
        <NavBar />
        <DailyStretch />
        <WeekStretch float = "right"/>
    </Fragment>,
    document.getElementById('root')
);