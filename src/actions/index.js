import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actionTypes';
let nextId = 0;
export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextId++,
    text
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export const setvisibilityReducers = (filter) => ({
        type: SET_VISIBILITY_FILTER,
        filter
})
