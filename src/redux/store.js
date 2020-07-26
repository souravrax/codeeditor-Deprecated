import { createStore, applyMiddleware } from 'redux';

import rootReducer from './rootReducer';
import logger from 'redux-logger';

const middleware = [logger];

export default createStore(rootReducer, applyMiddleware(...middleware));