import React from "react"
import memesData from "../memesData"

export default function Meme() {

    const [imageUrl, setImageUrl] = React.useState('https://i.imgflip.com/30b1gx.jpg')

    function getRandowImage(event) {
        
        const images = memesData.map(item => item.url)
        const randomIndex = Math.floor(Math.random() * images.length)
        const randomImageUrl = images[randomIndex]
        setImageUrl(randomImageUrl)
    }

    return (
        <section className="py-[36px]">
            <div className="wrapper">
                <div className="mb-[36px] text-center">
                    <div className="flex space-x-4 mb-4">
                        <input type="text" name="top-text" id="top-text" className="border flex-grow rounded text-xs p-3" />
                        <input type="text" name="bottom-text" id="bottom-text" className="border flex-grow rounded text-xs p-3"/>
                    </div>
                    <button className="bg-gradient w-full py-2 text-white font-bold rounded cursor-pointer" onClick={getRandowImage}> 
                        Get a new meme image  🖼
                    </button>
                </div>
                <img src={imageUrl} alt="" className=""/>
            </div>
        </section>
    )
}