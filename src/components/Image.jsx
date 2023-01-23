import React from "react"

export default function Image(props) {

    return (
        <div className="relative">
            <img src={props.url} alt="" className="w-full"/>
            <h2 className="text-shaddow absolute top-[30px] left-1/2 -translate-x-1/2 text-4xl text-white font-bold">{props.topText}</h2>
            <h3 className="text-shaddow absolute bottom-[30px] left-1/2 -translate-x-1/2 text-4xl text-white font-bold">{props.bottomText}</h3>
        </div>
    )
}