export default function Header(props) {
    
    return (
        <header className="bg-gradient-to-r from-fuchsia-700 to-fuchsia-500 text-white">
            <div className="wrapper flex items-center justify-between p-[20px]">
                <div className="flex">
                    <img src="/assets/images/logo.svg" alt="" className="w-[31px] mr-[7px]" />
                    <span className="text-xl font-bold">Meme Generator</span>
                </div>
                <h1 className="text-xs font-medium">{props.title}</h1>
            </div>
        </header>
    )
}