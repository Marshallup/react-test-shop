import React, { useEffect } from 'react';
// import loadable from '@loadable/component'
import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from 'pages/MainPage';
// import Products from 'components/Products';
import SingleProductPage from 'pages/SingleProductPage';
import MainLayout from 'layouts/MainLayout';
// const MainPage = loadable(() => import( /* webpackChunkName: 'MainPage' */ 'pages/MainPage'));
// const Products = loadable(() => import(/* webpackChunkName: 'Products' */ 'components/Products'));

export default function RouterPages() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0,0);
	}, [ location ]);

	return (
		<Routes>
			<Route path={'/'} element={<MainLayout/>}>
				<Route index element={<MainPage/>} render={() => {
					return (
						<div></div>
					)
				}} />
				<Route path={'singleProduct'} element={<SingleProductPage/>} />
			</Route>
		</Routes>
	)
}