/* eslint-disable */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import { Clock, RealClock } from './Clock';

//function tick() {
render(
  <div>
    {/*<Clock date={new Date()} />*/}
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={RealClock} />
        <Route path="/clock" handler={ () => <Clock date={new Date()} /> } />
      </Route>
      <Route path="/realclock" component={RealClock} />
    </Router>
  </div>,
  document.getElementById('app')
);
//}
//setInterval(tick, 1000);