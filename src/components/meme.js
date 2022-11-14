
import React, { useState, useEffect } from 'react';


function Meme() {
    const [meme,setMeme] = useState({
        topText: "",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes,setAllMemes] = useState([])
    //const [memeImage, setMemeImage]= useState("")

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    

    function getMemeImage(){
        
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url=allMemes[randomNumber].url
        setMeme(prevMem =>({
            ...prevMem,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name] : value
        }))
    }

    return(
        <main className="mimi">
            <div className="formi">
                <div className="form">
                <input 
                   type="text"
                   placeholder="top Text"
                   name="topText"
                   value={meme.topText}
                   onChange={handleChange}
                />
                <input 
                   type="text"
                   placeholder="bottom Text"
                   name="bottomText"
                   value={meme.bottomText}
                   onChange={handleChange}
                />
                </div>
                <button onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="memeImage"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme