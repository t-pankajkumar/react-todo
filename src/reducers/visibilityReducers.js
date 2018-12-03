import { SET_VISIBILITY_FILTER, SHOW_ALL } from "../actions/actionTypes";


const visibilityReducers = (state = SHOW_ALL, action) => {
    console.log(state,action);
    
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return state.filter;
        default:
            return state;
    }
}

export default visibilityReducers