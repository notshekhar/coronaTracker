import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

function _Button(props) {
    const styles = StyleSheet.create({
        _button: {
            backgroundColor: props.background || "white",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            width: props.width || 200,
            marginTop: 20,
            borderRadius: 5,
        },
        _button_text: {
            color: props.color || "black",
            fontWeight: "800"
        }
    })
    return (
        <TouchableOpacity
            onPress={() => {
                if (props.onPress) {
                    props.onPress()
                } else {
                    return
                }
            }}
            style={styles._button}
        >
            <Text style={styles._button_text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(_Button)
