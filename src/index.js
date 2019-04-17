import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './main/App';
import * as serviceWorker from './serviceWorker';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
