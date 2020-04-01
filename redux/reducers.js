import { combineReducers } from "redux"

function historyReducer(state = [], action) {
    switch (action.type) {
        case "PUSH_HISTORY":
            state.unshift(action.payload)
            return state
        case "POP_HISTORY":
            state.splice(0, 1)
            return state
        default:
            return state
    }
}
function screenReducer(
    state = { splash: true, first: false, home: false },
    action
) {
    switch (action.type) {
        case "CHANGE_SCREEN":
            for (let screen in state) state[screen] = false
            return { ...state, ...action.payload }
        default:
            return state
    }
}
function loginReducer(state = false, action) {
    switch (action.type) {
        case "LOGIN":
            return action.payload
        default:
            return state
    }
}
function postedReducer(state = false, action) {
    switch (action.type) {
        case "POSTED_DATA":
            return true
        default:
            return state
    }
}
let reducer = combineReducers({
    history: historyReducer,
    screen: screenReducer,
    login: loginReducer,
    dataPosted: postedReducer
})

export default reducer
