import React from "react";
import ReactDOM from "react-dom";
import App from '@/App';

import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free';
import 'assets/styles/app.scss';

ReactDOM.render(<React.StrictMode><App/></React.StrictMode>, document.getElementById('app'));

if (module.hot) { // enables hot module replacement if plugin is installed
 module.hot.accept();
}