import "./Design.css"
import Navbar from "./Navbar.js"

export default function Mainpage(){
    return(
        
    <div class = "head">
           
        <div class = "head">
            <p>PCParts</p>
        </div>

        <Navbar/>

        <div class = "dropdown">
           <button class = "buttondrp">Down</button>
                <div class = "links" >
                    <a href = "/partspage/game">Game</a>
                    <a href = "/Partspage/game2">Game 2</a>
                    <a href = "/Partspage/game3">Game 3</a>
                </div>
        </div>

    </div>

    )   

}
