import React, { useEffect } from 'react';

export default function useWindowScrollY(cb) {
	function onScroll() {
		cb(window.scrollY);
	}

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		onScroll();

		return () => window.removeEventListener('scroll', onScroll);
	}, [cb]);
}