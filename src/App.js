import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterPages from '@/router/RouterPages';

export default function App() {

	useEffect(() => {
		const preloader = document.getElementById('page-loader');

		function removePreloader() {
			preloader.classList.add('hide');
			setTimeout(() => {
				preloader.remove();
			}, 900);
			// console.log('DOM fully loaded and parsed');
		}

		window.addEventListener('load', removePreloader);

	}, []);
	return (
		<Router>
			<RouterPages/>
		</Router>
	)
}