/*
 * @Author: Jinqi Li
 * @Date: 2020-08-13 04:39:53
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-12-01 01:10:28
 * @FilePath: /benz/src/App.js
 */
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import Home from './components/home';

function App() {
	return (
		<div className="navRoute">
			<HashRouter basename="/benz">
				<Switch>
					<Route path="/" exact component={Home} />
					<Redirect to="/" />
				</Switch>
			</HashRouter>
		</div>
	);
}

export default App;
