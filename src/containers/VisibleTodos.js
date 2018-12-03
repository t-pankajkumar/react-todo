import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETE } from '../actions/actionTypes';

const getVisibleTodos = (todos, filter) => {
    console.log(filter);

    switch (filter) {
        case SHOW_ALL:
            return todos;
        case SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case SHOW_INCOMPLETE:
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        todos: getVisibleTodos(state.todos, state.visibilityReducers),
        visibilityReducers: state.visibilityReducers
    }
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)