import React from "react"
import { useSelector } from "react-redux"

import _first1 from "./_first1"
import Splash from "./splash"
import Home from "./home"

function Main() {
    const history = useSelector(state => state.history)
    const screen = useSelector(state => state.screen)
    // console.log(screen)
    if (screen.splash) return <Splash></Splash>
    if (screen.first) return <_first1 />
    if (screen.home || home) return <Home></Home>
}

export default React.memo(Main)
