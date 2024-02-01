import "./Design.css"
import Navbar from "./Navbar"



export default function Partspage(){ 
    

    
    return(
        
        <div>
            <div class = "head">
             <div class = "head">
                    <p>PCParts</p>
                </div>

                <Navbar/>
                    
                    <div class = "box">
                        <b>CPU</b>
                        <button onclick = "myFunction()"></button>
                        <div id="myDIV">
                            Show
                        </div>

                    </div>


                    <div class = "box2">

                        <b>GPU - Graphics Card</b>

                    </div>


                    <div class = "box3">

                        <b>Motherboard</b>

                    </div>


                    <div class = "box4">

                        <b>Memory</b>

                    </div>


                    <div class = "box5">

                        <b>Storage</b>

                    </div>
                


            </div>
        </div>
        

        
        
        
    )
    
    }
