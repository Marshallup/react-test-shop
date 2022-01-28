import React, { Suspense, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
// import { CSSTransition, TransitionGroup, SwitchTransition } from 'react-transition-group';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function MainLayout() {
	// const location = useLocation();
	// const nodeRef = useRef(null);
	return (
		<>
			<Header/>
			<div className="main">
				{/*<SwitchTransition mode={'out-in'}>*/}
				{/*	<CSSTransition nodeRef={nodeRef} key={location.pathname} classNames="fade" timeout={5000}>*/}
				{/*		<div ref={nodeRef} className={'main-layout-wrapper'}>*/}
				{/*<Suspense fallback={null}>*/}
				{/*<TransitionGroup>*/}
				{/*	<CSSTransition unmountOnExit={true} nodeRef={nodeRef} key={location.key} classNames="fade" timeout={2000}>*/}
				{/*		<div>*/}
				{/*<Suspense fallback={null}>*/}
					<Outlet/>
				{/*</Suspense>*/}
						{/*</div>*/}
					{/*</CSSTransition>*/}
				{/*</TransitionGroup>*/}
				{/*</Suspense>*/}
				{/*</div>*/}
				{/*</CSSTransition>*/}
				{/*</SwitchTransition>*/}
			</div>
			<Footer/>
		</>
	)
}