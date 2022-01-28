import React, { useEffect, useState } from 'react';
import { Routes, useLocation } from 'react-router-dom';

export default function CustomSwitch({ children }) {
	const [ progress, setProgress ] = useState(false)
	const [ prevLoc, setPrevLoc ] = useState('')
	const location = useLocation();
	// const contextRouter = matchRoutes();

	useEffect(() => {
		console.log(location, 'location');
		// console.log(unstable_HistoryRouter, 'contextRouter')
		setPrevLoc(location.pathname);
		setProgress(true)
		if(location.pathname === prevLoc) {
			setPrevLoc('')
		}
	}, [location]);

	useEffect(() => {
		setProgress(false)
	}, [prevLoc]);

	return (
		<>
			<pre>
				{ prevLoc }
			</pre>
			<Routes>
				{ children }
			</Routes>
		</>
	)
}