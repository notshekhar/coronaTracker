import { AsyncStorage } from "react-native"

import { changeScreen, hideSplash, postedData } from "./actions"
import ajax from "../basics/fetch"
import apis from "../basics/apis"

export const chechNextScreen = () => {
    return dispatch => {
        AsyncStorage.getItem("first").then(home => {
            if (home) {
                if (!JSON.parse(home)) {
                    hideSplash({ home: true })(dispatch)
                } else {
                    hideSplash({ first: true })(dispatch)
                }
            } else {
                hideSplash({ first: true })(dispatch)
            }
        })
    }
}

export const setHomeLocal = () => {
    return dispatch => {
        AsyncStorage.setItem("first", "false").then(() => {
            dispatch(changeScreen({ home: true }))
        })
    }
}

export const postData = data => {
    return dispatch => {
        AsyncStorage.getItem("_id").then(e => {
            let d = {
                _id: e,
                ...data
            }
            ajax(apis.storeData, d).then(e => {
                if (e) {
                    dispatch(postedData())
                }
            })
        })
    }
}

