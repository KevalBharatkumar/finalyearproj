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
                        <b class="title">CPU</b>
                        <button class='component'>
                            Add Components
                        </button>
                    </div>


                    <div class = "box2">
                        <b>GPU - Graphics Card</b>
                        <button class='component'>
                            Add Components
                        </button>

                    </div>


                    <div class = "box3">
                        <b>Motherboard</b>
                        <button class='component'>
                            Add Components
                        </button>

                    </div>


                    <div class = "box4">
                        <b>Memory</b>
                        <button class='component'>
                            Add Components
                        </button>
                    </div>


                    <div class = "box5">
                        <b>Storage</b>
                        <button class='component'>
                            Add Components
                        </button>

                    </div>
                


            </div>
        </div>

      
        

        
        
        
    )

    
    }

    