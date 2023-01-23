import React from "react"
import memesData from "../memesData"
import Image from "./Image"

export default function Meme() {

    const [meme, setMeme] = React.useState(() => ({
        topText: '', 
        bottomText: '',
        randomImage: 'https://i.imgflip.com/1ur9b0.jpg'
    }))

    function getMemeImage() {
        
        const allImages = memesData.map(item => item.url)
        const randomIndex = Math.floor(Math.random() * allImages.length)
        const randomImageUrl = allImages[randomIndex]

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: randomImageUrl
        }))
    }

    function handleInput(event) {
        setMeme(preveState => {
            return {
                ...preveState,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <section className="py-[36px]">
            <div className="wrapper">
                <div className="mb-[36px] text-center">
                    <div className="flex space-x-4 mb-4">
                        <input 
                            type="text" 
                            className="border flex-grow rounded text-xs p-3" 
                            name="topText" 
                            value={meme.topText}
                            onChange={handleInput}
                        />
                        <input 
                            type="text" 
                            className="border flex-grow rounded text-xs p-3"
                            name="bottomText" 
                            value={meme.bottomText}
                            onChange={handleInput}
                        />
                    </div>
                    <button 
                        className="bg-gradient w-full py-2 text-white font-bold rounded cursor-pointer" 
                        onClick={getMemeImage}
                    > 
                        Get a new meme image  🖼
                    </button>
                </div>
                <Image 
                    topText={meme.topText}
                    bottomText={meme.bottomText}
                    url={meme.randomImage}
                />
            </div>
        </section>
    )
}