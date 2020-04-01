import React from "react"
import _first11 from "./_first11"
import _first12 from "./_first12"

function _first1() {
    const [screen, changeScreen] = React.useState(true)
    if (screen)
        return <_first11 onBtnPress={() => changeScreen(false)}></_first11>
    else return <_first12 onBackBtnPress={() => changeScreen(true)}></_first12>
}

export default React.memo(_first1)
