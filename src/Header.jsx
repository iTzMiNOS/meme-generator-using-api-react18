import troll from "/images/troll.png"

export default function Header(){
    return (
        <header className="header-container">
            <div className="header-logo">
                <img src={troll} className="header-image"/>
                <h2>Meme Generator</h2>
            </div>
            <h1 className="header-text">We Create Your Funny Idea!!</h1>
        </header>
    )
}