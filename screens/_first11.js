import React from "react"
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView
} from "react-native"
import { useDispatch } from "react-redux"

import _styles from "../styles/style"

import _Button from "../components/button"

import colors from "../theme/colors"
import { setHomeLocal } from "../redux/_action2"

function _first11(props) {
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.holder}>
                <Text style={_styles.title}>How do you feel today?</Text>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <_Button
                        title="Good"
                        onPress={() => {
                            setHomeLocal()(dispatch)
                        }}
                    ></_Button>
                    <_Button
                        title="Not Good"
                        background="rgb(11, 11, 11)"
                        color="white"
                        onPress={() => props.onBtnPress()}
                    ></_Button>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: colors.secondary
    },
    holder: {
        alignItems: "center",
        width: "100%"
    }
})

export default React.memo(_first11)
