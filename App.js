import React from "react"
import { Provider } from "react-redux"

import Main from "./screens/main.js"

import store from "./redux/store"
import { View, Text } from "react-native"

export default function App() {
    // React.useEffect(() => {
    //     alert("okay")
    // }, [])
    return (
        <Provider store={store}>
        {/* <View>
            <Text>
                hello world
            </Text>
        </View> */}
            <Main />
        </Provider>
    )
}
