import React from 'react'; 
import './App.css';

import Header from './components/global/Header';
import Home from './components/home/Home';

function App() {
	return (
		<div>
			<Header pageTitle="Access User Data" />

			<Home />
		</div>
	)
}

export default App
