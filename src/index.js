import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navBar';
import DailyStretch from './stretchContainers/dailyStretch';



ReactDOM.render(
    <Fragment>
        <NavBar />
        <DailyStretch />
    </Fragment>,
    document.getElementById('root')
);