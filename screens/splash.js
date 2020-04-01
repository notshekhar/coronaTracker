import React from "react"
import { View, StyleSheet, Image, Animated } from "react-native"

import { useDispatch } from "react-redux"
import { checkLogin } from "../redux/actions"
import { chechNextScreen } from "../redux/_action2"

import icon from "../assets/icon.png"
import colors from "../theme/colors"

function Splash() {
    const dispatch = useDispatch()
    const [size] = React.useState(new Animated.Value(100))
    React.useEffect(() => {
        checkLogin()(dispatch)
        chechNextScreen()(dispatch)
        Animated.timing(size, {
            toValue: 150,
            duration: 1000
        }).start()
    }, [])
    return (
        <View style={styles.splash}>
            <Animated.Image style={{height: size, width:size}} source={icon}></Animated.Image>
        </View>
    )
}

const styles = StyleSheet.create({
    splash: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.secondary
    }
})

export default React.memo(Splash)
