export default function Meme() {

    return (
        <section className="py-[36px]">
            <div className="wrapper">
                <form className="meme">
                    <div className="flex space-x-4 mb-4">
                        <input type="text" name="top-text" id="top-text" className="border flex-grow rounded text-xs p-3" />
                        <input type="text" name="bottom-text" id="bottom-text" className="border flex-grow rounded text-xs p-3"/>
                    </div>
                    <input 
                        type="submit" name="submit" id="submit" value="Get a new meme image  🖼"
                        className="bg-gradient w-full py-2 text-white font-bold rounded"
                    />
                </form>
            </div>
        </section>
    )
}