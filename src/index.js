import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
<Provider store={createStore(reducers)}>
	<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
