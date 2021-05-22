import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './redux/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {createStore, applyMiddleware, compose} from 'redux';

const store = createStore(rootReducer, compose(applyMiddleware(thunk),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()|| window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ),
);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


