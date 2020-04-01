import React from "react"
import _first121 from "./_first121"
import _first122 from "./_first122"

const _first12 = () => {
    const [screen, changeScreen] = React.useState(true)

    if (screen) return <_first121 onBtnPress={()=>changeScreen(false)}></_first121>
    else return <_first122></_first122>
}

export default React.memo(_first12)
