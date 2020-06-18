import { VisibilityFilters } from './actions'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

function todoApp(state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    return state
}