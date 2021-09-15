import React from 'react';
import './App.scss';
import { StaticKitProvider } from '@statickit/react';
import Home from './component/Home';
import Footer from './component/Footer';


function App() {
	

	return (
		<StaticKitProvider site="fb20e75bfacd">
		<Home/>
		<Footer/>
		</StaticKitProvider>
	);
}

export default App;
