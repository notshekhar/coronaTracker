import React from "react"
import {
    View,
    TouchableOpacity,
    CheckBox,
    Text,
    StyleSheet
} from "react-native"
import colors from "../theme/colors"

const _checkBox = ({ title, width, onSelect }) => {
    const [check, changeCheck] = React.useState(false)
    React.useEffect(() => {
        onSelect(check)
    }, [check])
    const styles = StyleSheet.create({
        checkbox: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.primary,
            width: width || 200,
            marginTop: 20,
            borderRadius: 5,
            height: 40,
            overflow: "hidden"
        },
        checkWrap: {
            backgroundColor: "white",
            height: "100%",
            width: 40,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 20
        }
    })
    return (
        <View>
            <TouchableOpacity
                style={styles.checkbox}
                onPress={() => {
                    changeCheck(!check)
                }}
            >
                <View style={styles.checkWrap}>
                    <CheckBox
                        value={check}
                        onValueChange={e => {
                            changeCheck(!check)
                        }}
                    ></CheckBox>
                </View>
                <Text style={{ color: "white" }}> {title || "example"}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(_checkBox)
