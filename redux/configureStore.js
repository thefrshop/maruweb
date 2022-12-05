import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import persistReducer from './reducer';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureSotre = () => {
    const store = createStore(persistReducer, composeWithDevTools());
    let persistor = persistStore(store);
    return { persistor, ...store };
};

const wrapper = createWrapper(configureSotre, {
    debug: process.env.NODE_ENV === 'development,',
});

export default wrapper;
