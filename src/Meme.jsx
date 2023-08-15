import React from "react"

export default function Meme(){

    const [imageUrl, setImageUrl] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data))
    }, [])
    console.log(allMemes)
    
    function randomImage() {
        const memesArray = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setImageUrl(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    // eslint-disable-next-line no-unused-vars
    const [formData, setFormData] = React.useState(
        {topText: "", bottomText: ""}
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    console.log(formData)

    return (
        <main className="meme-container">
            <div className="form-container">
                <input 
                    name="topText" 
                    placeholder="Top Text" 
                    type="text" 
                    className="meme-input" 
                    onChange={handleChange} 
                    value={formData.topText}    
                />
                <input 
                    name="bottomText" 
                    placeholder="Bottom Text" 
                    type="text" className="meme-input" 
                    onChange={handleChange}
                    value={formData.bottomText}
                />
                <button className="form-button" onClick={randomImage}>Get a new meme image</button>
                <div className="meme">
                    <img className="meme-image" src={imageUrl.randomImage} />
                    <h2 className="meme-text top">{formData.topText}</h2>
                    <h2 className="meme-text bottom">{formData.bottomText}</h2>
                </div>
            </div>
            
        </main>
        
    )
}