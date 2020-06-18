import { VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions'
const { SHOW_ALL } = VisibilityFilters



// REDUCER COMPOSITION -- todos reducers receives an ARRAY 
// representing ONLY the state that this reducer needs
// the ability to update. 
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed = false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}
// REDUCER COMPOSITION -- visibility reducer receives an obj
// representing initial state only for what it knows how to control 
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

// This is now the main reducer -- a fn returning fns that each 
// return current state unless an action is being called on
function todoApp(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}