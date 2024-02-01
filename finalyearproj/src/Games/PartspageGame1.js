import "../pages/Design.css"
import Navbar from "../pages/Navbar"
import 'reactjs-popup/dist/index.css';
import Popup from "reactjs-popup"

export default function PartspageGame1(){ 


    return(
        
        <div>
            <div class = "head">
             <div class = "head">
                    <p>PCParts</p>
                </div>

                <Navbar/>
                    <p>The software you have chosen is </p>
                        <b>Starfield</b>

                        <div class = "box">
                            <b>CPU</b>
                        <div>

                        <div2 id='title'>
                            AMD Ryzen 5 5600x
                            {/* image */}
                            <p><b>
                                Information
                            </b></p>
                        </div2>
                        
                
                        
                        <Popup trigger= 
                        {<button class='popup'>Compare</button>}>
                           <div>hi</div>
                        </Popup>
                    </div>

                    </div>


                    <div class = "box2">
                    <b>GPU - Graphics card</b>
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