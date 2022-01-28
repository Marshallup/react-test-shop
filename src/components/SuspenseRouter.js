import { useState, useTransition } from 'react';
import { Router } from 'react-router-dom';

const SuspenseRouter = ({ children, history, ...config }) => {
	const [startTransition, isPending] = useTransition();
	const [suspenseHistory] = useState(() => {
	const { push, replace, go } = history;

		// history.push = (...args) => {
		// 	startTransition(() => { push.apply(history, args); });
		// };
		// history.replace = (...args) => {
		// 	startTransition(() => { replace.apply(history, args); });
		// };
		// history.go = (...args) => {
		// 	startTransition(() => { go.apply(history, args); });
		// };
	});

	suspenseHistory.isPending = isPending;

	return (
		<Router history={suspenseHistory}>
			{children}
		</Router>
	);
};

export default SuspenseRouter;
