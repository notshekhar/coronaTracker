import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import _Button from "../components/button"
import _checkBox from "../components/checkbox"
import colors from "../theme/colors"
import _styles from "../styles/style"
import { postData, setHomeLocal } from "../redux/_action2"

const _first121 = props => {
    const dispatch = useDispatch()
    const posted = useSelector(state => state.dataPosted)

    const [selected, changeSelected] = React.useState({
        fever: false,
        dryCough: false,
        fatigue: false,
        sputumProduction: false,
        shortnessOfBreath: false,
        muscleOrJointPain: false,
        soreThroat: false,
        headache: false,
        chills: false,
        nauseaOrVomiting: false,
        nasalCongestion: false,
        diarrhoea: false,
        haemoptysis: false,
        conjunctivalCongestion: false
    })
    React.useEffect(() => {
        if (posted) {
            setHomeLocal()(dispatch)
        }
    }, [posted])
    return (
        <View style={styles.view}>
            <Text style={_styles.title}>Symptoms your body showing?</Text>
            <View style={styles.scrollview}>
                <ScrollView>
                    <_checkBox
                        title="Fever"
                        onSelect={e => {
                            changeSelected({ ...selected, ...{ fever: e } })
                        }}
                    ></_checkBox>
                    <_checkBox
                        title="Dry cough"
                        onSelect={e => {
                            changeSelected({ ...selected, ...{ dryCough: e } })
                        }}
                    ></_checkBox>
                    <_checkBox
                        title="Fatigue"
                        onSelect={e => {
                            changeSelected({ ...selected, ...{ fatigue: e } })
                        }}
                    ></_checkBox>
                    <_checkBox
                        title="Sputum production"
                        onSelect={e => {
                            changeSelected({
                                ...selected,
                                ...{ sputumProduction: e }
                            })
                        }}
                    ></_checkBox>
                    <_checkBox
                        title="Shortness of breath"
                        onSelect={e => {
                            changeSelected({
                                ...selected,
                                ...{ shortnessOfBreath: e }
                            })
                        }}
                    ></_checkBox>
                    <_checkBox
                        title="Muscle or joint pain"
                        onSelect={e => {
                            changeSelected({
                                ...selected,
                                ...{ muscleOrJointPain: e }
                            })
                        }}
                    ></_checkBox>
                    <_checkBox
                        title="Sore throat"
                        onSelect={e => {
                            changeSelected({
                                ...selected,
                                ...{ soreThroat: e }
                            })
                        }}
                    ></_checkBox>
                    <_checkBox
                        title="Headache"
                        onSelect={e => {
                            changeSelected({ ...selected, ...{ headache: e } })
                        }}
                    ></_checkBox>
                    <_checkBox
                        title="Chills"
                        onSelect={e => {
                            changeSelected({ ...selected, ...{ chills: e } })
                        }}
                    ></_checkBox>
                    <_checkBox
                        title="Nausea or vomiting"
                        onSelect={e => {
                            changeSelected({
                                ...selected,
                                ...{ nauseaOrVomiting: e }
                            })
                        }}
                    ></_checkBox>
                    <_checkBox
                        title="Nasal congestion"
                        onSelect={e => {
                            changeSelected({
                                ...selected,
                                ...{ nasalCongestion: e }
                            })
                        }}
                    ></_checkBox>
                    <_checkBox
                        title="Diarrhoea"
                        onSelect={e => {
                            changeSelected({ ...selected, ...{ diarrhoea: e } })
                        }}
                    ></_checkBox>
                    <_checkBox
                        title="Haemoptysis"
                        onSelect={e => {
                            changeSelected({
                                ...selected,
                                ...{ haemoptysis: e }
                            })
                        }}
                    ></_checkBox>
                    <_checkBox
                        title="Conjunctival congestion"
                        onSelect={e => {
                            changeSelected({
                                ...selected,
                                ...{ conjunctivalCongestion: e }
                            })
                        }}
                    ></_checkBox>
                </ScrollView>
            </View>
            <_Button
                title="Submit"
                background="blue"
                color="white"
                onPress={() => {
                    postData(selected)(dispatch)
                }}
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
    },
    scrollview: {
        height: 400
    }
})

export default React.memo(_first121)

// tunna
