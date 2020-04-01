import apis from "../basics/apis"
import ajax from "../basics/fetch"
import { AsyncStorage } from "react-native"

export function pushhistory(history) {
    return {
        type: "PUSH_HISTORY",
        payload: history
    }
}
export function pophistory() {
    return {
        type: "POP_HISTORY"
    }
}
export const changeScreen = data => {
    return {
        type: "CHANGE_SCREEN",
        payload: data
    }
}
export const login = () => {
    console.log("logged in")
    return {
        type: "LOGIN",
        payload: true
    }
}
export const postedData = () => {
    return {
        type: "POSTED_DATA"
    }
}

export const checkLogin = () => {
    return dispatch => {
        AsyncStorage.getItem("_id").then(e => {
            if (e) {
                ajax(apis.login, { token: e })
                    .then(e => {
                        if (e.login) dispatch(login())
                        else signup()(dispatch)
                    })
                    .catch(err => {
                        console.log("error", "login error")
                    })
            } else {
                signup()(dispatch)
            }
        })
    }
}
export const signup = () => {
    return dispatch => {
        ajax(apis.signup).then(e => {
            AsyncStorage.setItem("_id", e.token).then(() => {
                console.log("_idSet", "actions log")
            })
            if (e.signup) dispatch(login())
            else signup()(dispatch)
        })
    }
}
export const hideSplash = data => {
    return dispatch => {
        setTimeout(() => {
            dispatch(changeScreen(data))
        }, 3000)
    }
}
