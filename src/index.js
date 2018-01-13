import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { history, store } from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import App from './containers/App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
