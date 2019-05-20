import { createStore, compose } from 'redux';
import reducers from './reducers';

export function configureStore(initialState) {
    const store = createStore(
      reducers,
      initialState,
      compose(window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())
    );
  
    return store;
  }
