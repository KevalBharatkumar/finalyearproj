import "../pages/Design.css";
import Navbar from "../pages/Navbar";
import 'reactjs-popup/dist/index.css';
import Popup from "reactjs-popup";
import React from "react";

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
                        <p>AMD Ryzen 5 3600x</p>
                        {/* image */}
                        <p><b>Information</b></p>
                                
                        <Popup trigger= 
                        {<p class='text'>ClockSpeed: 3.8GHz</p>}>
                           <div>
                            The clockspeed measures the number of cycles your CPU executes which is then measured in gigahertz.
                            Ideally, the faster the clocksped, the faster the CPU. However alot of different factors play into this.
                           </div>
                        </Popup>
                               
                        <Popup trigger= 
                        {<p class='text'>CPU Cores: <b>6</b></p>}>
                           <div>A CPU core is a processing unit that can execute instructions.</div>
                        </Popup>

                        <Popup trigger= 
                        {<p class='text'>Cache: 35MB</p>}>
                           <div>hi</div>
                        </Popup>

                        <Popup trigger= 
                        {<p class='text'>Memory Support: DDR4</p>}>
                           <div>hi</div>
                        </Popup>     
                    </div2>

                    <table>
                        <tr>
                            <th>Pros</th>
                            <th>Cons</th>
                        </tr>
                        <tr>
                            <th>- Hi my name is kev and i am creating something</th>
                            <th>- Hi i am also creating something idk</th>
                        </tr>
                        <tr>
                            <th>- running it through to league</th>
                         </tr>
                    </table>



                    <Popup trigger= 
                        {<button class='popup'>Compare</button>}>
                           <div>hi</div>
                    </Popup>
                    </div>

                    </div>



                    <div class = "box2">
                    <b>GPU - Graphics card</b>

                        <div id='title'>
                            <p>GeForce RTX 2080</p>
                        </div>

                        <p><b>Information</b></p>

                        <Popup trigger= 
                        {<button class='popup'>Compare</button>}>
                           <div>hi</div>
                        </Popup>

                    </div>


                    <div class = "box3">
                        <b>Motherboard</b>
                        <div id='title'>
                            <p>Insert Motherboard</p>
                        </div>

                        <p><b>Information</b></p>

                        <Popup trigger= 
                        {<button class='popup'>Compare</button>}>
                           <div>hi</div>
                        </Popup>

                    </div>


                    <div class = "box4">
                    <b>Memory</b>
                    <div id='title'>
                            <p>16GB RAM</p>
                        </div>

                        <p><b>Information</b></p>

                        <Popup trigger= 
                        {<button class='popup'>Compare</button>}>
                           <div>hi</div>
                        </Popup>

                    </div>


                    <div class = "box5">
                    <b>Storage</b>
                    <div id='title'>
                            <p>500GB SSD - Minimum</p>
                        </div>

                        <p><b>Information</b></p>

                        <Popup trigger= 
                        {<button class='popup'>Compare</button>}>
                           <div>hi</div>
                        </Popup>

                    </div>
            </div>
        </div>
        

        
        
        
    )
    
    }
    