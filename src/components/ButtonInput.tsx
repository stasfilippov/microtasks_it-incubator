import React from "react"

type ButtonInputPropsType = {
    name: string
    callBack: () => void
    newTitle: string
}



export const ButtonInput = (props: ButtonInputPropsType) => {


    const oncClickButtonHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={() => oncClickButtonHandler()}>{props.name}</button>
    )
}