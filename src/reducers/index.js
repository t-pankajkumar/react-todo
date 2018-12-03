import {combineReducers} from 'redux';
import todos from './todos';
import visibilityReducers from './visibilityReducers';
export default combineReducers({
    todos,
    visibilityReducers
})