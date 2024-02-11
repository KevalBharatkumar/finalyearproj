import "../pages/Design.css";
import Navbar from "../pages/Navbar";
import 'reactjs-popup/dist/index.css';
import Popup from "reactjs-popup";
import React from "react";

export default function PartspageGame1(){ 
    
return(
    <div>
        <div>
            <div class = "head">
                <p>PCParts</p>
            

            <Navbar/>

            <p>The software you have chosen is </p>
            <b>Starfield</b>
            </div>

                <div class = "rework">
                    <b>CPU</b>

                    <div>
               
                <div2>
                        <p>AMD Ryzen 5 3600x</p>
                        {/* image */}
                        <p><b>Information</b></p>
                                
                        <Popup trigger= 
                        {<p class='text'>ClockSpeed: <b>3.8GHz</b></p>}>
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
                        {<p class='text'>CPU Cache:  <b>35MB</b></p>}>
                           <div>This is short term memory where information is stored for retrival. 
                            It is used by the CPU to reduce the time for memory retrival from the main access memory.
                            </div>
                        </Popup>

                        <Popup trigger= 
                        {<p class='text'>Memory Support: <b>DDR4 RAM</b></p>}>
                           <div>DDR4 RAM is supported with the Ryzen 5000 series. DDR5 is <b>NOT</b> supported with this CPU.</div>
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

                </div>


                    <Popup trigger= 
                        {<button class='popup'>Compare</button>}>
                           <div>hi</div>
                    </Popup>
                

                </div>





                <div class = "rework">
                    <b>GPU - Graphics card</b>

                            <p>GeForce RTX 2080</p>

                        <p><b>Information</b></p>

                        <Popup trigger= 
                        {<p class='text'>Base Clock Speed: <b>1410MHz</b></p>}>
                           <div>
                            The clockspeed measures the number of cycles your CPU executes which is then measured in gigahertz.
                            Ideally, the faster the clocksped, the faster the CPU. However alot of different factors play into this.
                           </div>
                        </Popup>
                        
                        <Popup trigger= 
                        {<p class='text'>Boost Clock Speed:<b>1665MHz</b></p>}>
                           <div>
                            The clockspeed measures the number of cycles your CPU executes which is then measured in gigahertz.
                            Ideally, the faster the clocksped, the faster the CPU. However alot of different factors play into this.
                           </div>
                        </Popup>
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

                




                    <div class = "rework">
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


                    <div class = "rework">
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


                    <div class = "rework">
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
    