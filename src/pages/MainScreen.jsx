import React, { useState } from 'react'
import ClickIncrease from '../components/increaseComponent/ClickIncrease'
import HoverIncrease from '../components/increaseComponent/HoverIncrease'

export default function MainScreen() {
    const [clickCounter, setClickCounter] = useState(0)
    const [hoverCounter, setHoverCounter] = useState(0)
  return (
    <div>
        <p>
        hover counter {hoverCounter}

        </p>
        <p>
        click counter {clickCounter}

        </p>
        <ClickIncrease setIncreaseCounter={setClickCounter} counterValue={clickCounter}/>
        <HoverIncrease setIncreaseCounter={setHoverCounter} counterValue={hoverCounter}/>
    </div>
  )
}
