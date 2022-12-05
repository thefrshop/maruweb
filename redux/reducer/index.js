import authentication from './authentication';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import globaldata from './globaldata';
import controldata from './controldata';
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authentication'],
};

const rootReducer = combineReducers({
    authentication,
    globaldata,
    controldata,
});

export default persistReducer(persistConfig, rootReducer);
