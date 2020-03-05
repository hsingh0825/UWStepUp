import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navBar';
import DailyStretch from './stretchContainers/dailyStretch';



ReactDOM.render(
    <Fragment>
        <NavBar />
        <DailyStretch />
        <h>"Test"</h>
    </Fragment>,
    document.getElementById('root')
);