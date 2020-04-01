import React from "react"
import { Text, View, TextInput, StyleSheet } from "react-native"

function Input(props) {
    const [value, setValue] = React.useState(props.value)
    return (
        <TextInput
            placeholder={props.placeholder}
            style={styles.textinput}
            value={value}
            onChangeText={text=> setValue(text)}
        ></TextInput>
    )
}

const styles = StyleSheet.create({
    textinput: {
        height: 40,
        width: "90%",
        elevation: 30,
        borderColor: "rgba(25, 25, 25, 0.4)",
        borderRadius: 2,
        paddingLeft: 10,
        backgroundColor: "rgba(25, 25, 25, 0.2)",
        maxWidth: 400
    }
})
export default React.memo(Input)
