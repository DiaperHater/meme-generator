import React from "react"
import memesData from "../memesData"

export default function Meme() {

    const [meme, setMeme] = React.useState(() => ({
        topText: 'top text', 
        bottomText: 'bottom text',
        randomImage: 'https://i.imgflip.com/1ur9b0.jpg'
    }))

    function getMemeImage(event) {
        
        const allImages = memesData.map(item => item.url)
        const randomIndex = Math.floor(Math.random() * allImages.length)
        const randomImageUrl = allImages[randomIndex]
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: randomImageUrl
        }))
    }

    return (
        <section className="py-[36px]">
            <div className="wrapper">
                <div className="mb-[36px] text-center">
                    <div className="flex space-x-4 mb-4">
                        <input type="text" name="top-text" id="top-text" className="border flex-grow rounded text-xs p-3" />
                        <input type="text" name="bottom-text" id="bottom-text" className="border flex-grow rounded text-xs p-3"/>
                    </div>
                    <button className="bg-gradient w-full py-2 text-white font-bold rounded cursor-pointer" onClick={getMemeImage}> 
                        Get a new meme image  🖼
                    </button>
                </div>
                <img src={meme.randomImage} alt="" className="w-full"/>
            </div>
        </section>
    )
}