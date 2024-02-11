import "./Design.css"
import Navbar from "./Navbar.js"

export default function Mainpage(){
return(
        
<div>  
        <div class = "head">
            <p>PCParts</p>
        </div>


        <Navbar/>

        <h4 class='head'>Select a software from below:</h4>

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
