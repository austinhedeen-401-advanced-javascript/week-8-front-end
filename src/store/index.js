import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import images from './reducers/images';

const reducers = combineReducers({
  images,
});

const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
