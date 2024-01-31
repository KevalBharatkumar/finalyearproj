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
                    <a href = "/partspage/game">Starfield</a>
                    <a href = "/Partspage/game2">GTA 5</a>
                    <a href = "/Partspage/game3">Hogwarts Legacy</a>
                </div>
        </div>

    </div>

    )   

}
