import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

import _Button from "../components/button"
import colors from "../theme/colors"
import _styles from "../styles/style"

const _first122 = props => {
    return (
        <View style={styles.view}>
            <Text style={_styles.title}>What are you facing?</Text>
            <_Button
                title="Common cold"
                background="yellow"
                color="black"
            ></_Button>
            <_Button
                title="Positive Corona"
                background="red"
                color="white"
            ></_Button>
            <_Button
                title="Help me to discover"
                background="blue"
                color="white"
                onPress={()=>props.onBtnPress()}
            ></_Button>
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.secondary
    }
})

export default React.memo(_first122)
