import "../pages/Design.css";
import Navbar from "../pages/Navbar";
import 'reactjs-popup/dist/index.css';
import Popup from "reactjs-popup";
import React from "react";
import "../pages/Design.css"

export default function PartspageGame2(){ 

return(
    <div>
        <div>
            <div class = "head">
                <header>PCParts</header>
            
                <Navbar/>

                <p>The software you have chosen is </p>
                <b>GTA 5</b>
            </div>

            <div class = "rework">
                <div class ='text'>
                    <b>CPU</b>

                    <p>AMD X8 FX-8350</p>
                    {/* image */}
                    <p><b>Information</b></p>

                </div>
                                
                <Popup trigger= 
                    {<p class='text'><b>What is a CPU?</b></p>}>
                        <div>
                            The CPU stands for central processing unit and is initially the brain of the computer. This provides instructions and power for the computer to function together.
                        </div>
                </Popup>

                        <Popup trigger= 
                        {<p class='text'>ClockSpeed: <b>4.0GHz</b></p>}>
                           <div>
                            The clockspeed measures the number of cycles your CPU executes which is then measured in gigahertz.
                            Ideally, the faster the clocksped, the faster the CPU. However alot of different factors play into this.
                           </div>
                        </Popup>
                               
                        <Popup trigger= 
                        {<p class='text'>CPU Cores: <b>8</b></p>}>
                           <div>A CPU core is a processing unit that can execute instructions.</div>
                        </Popup>

                        <Popup trigger= 
                        {<p class='text'>CPU Cache:  <b>8MB</b></p>}>
                           <div>This is short term memory where information is stored for retrival. 
                            It is used by the CPU to reduce the time for memory retrival from the main access memory.
                            </div>
                        </Popup>

                        <Popup trigger= 
                        {<p class='text'>Memory Support: <b>DDR3 RAM</b></p>}>
                           <div>DDR3 RAM is supported with this CPU.</div>
                        </Popup>     
                    

                    
                


                  
                

                </div>





                <div class = "rework">
                <div class ='text'>
                    <b>GPU - Graphics card</b>

                            <p>NVIDIA GTX 660 2GB</p>

                        <p><b>Information</b></p>
                </div>

                        <Popup trigger= 
                        {<p class='text'><b>What is a GPU?</b></p>}>
                           <div>
                            The GPU stands for graphics processing unit. The GPU renders images and grpahics by performing mathematical calculations.
                           </div>
                        </Popup>

                        <Popup trigger= 
                        {<p class='text'>Base Clock Speed: <b>980MHz</b></p>}>
                           <div>
                            The clockspeed in a GPU is like the clock speed in a CPU. It is usually represents
                            how many instructions your GPU can process each second.
                           </div>
                        </Popup>
                        
                        <Popup trigger= 
                        {<p class='text'>Boost Clock Speed: <b>1033MHz</b></p>}>
                           <div>
                            Depending on the load of power, the GPU can increase its clockspeed to a maximum depending on the card.
                           </div>
                        </Popup>

                        <Popup trigger= 
                        {<p class='text'>Memory Size: <b>2GB</b></p>}>
                            <div>Also known as VRAM, It is similar to RAM however, the VRAM is memory that your GPU uses to render images to your screen.</div>
                        </Popup>

                        
                        <p class='text'>Memory Type: <b>GDDR5</b></p>
                      

                        <Popup trigger= 
                        {<p class='text'>Outputs: </p>}>
                           <div>
                           <b>1x HDMI </b>,<b> 1x DisplayPort</b>,<b> 2x DVI</b>
                            </div>
                        </Popup>

                    
                </div>

                




                    <div class = "rework">
                        <div class ='text'>

                        
                        <b>Motherboard</b>
                        <div id='title'>
                            <p>Gigabyte GA-970-Gaming SLI</p>
                        </div>

                        <p><b>Information</b></p>
                        </div>

                        <Popup trigger= 
                        {<p class='text'><b>What is a Motherboard?</b></p>}>
                           <div>
                          The Motherboard is the main circuit board of the computer where all components and external peripherals are connected.
                           </div>
                        </Popup>

                        <Popup trigger= 
                        {<p class='text'>Supports AMD AM3 and AM3+ Processors</p>}>
                           <div>
                              This motherboard is only AM3 and AM3+ processors ready only.
                           </div>
                        </Popup> 

                        <Popup trigger= 
                        {<p class='text'><b>1x M.2</b> Slot</p>}>
                           <div>
                              You are able to install a heatsink if you want to, but the motherboard does NOT come with a heatsink.
                           </div>
                        </Popup>
                        <Popup trigger= 
                        {<p class='text'><b>Connectivity ports</b></p>}>
                           <div>1. 6x USB 2.0/1.1</div>
                           <div>2. 2x USB 3.0/2.0</div>
                           <div>3. 2x USB 3.1 - 1x Type-A </div>
                           <div>4. 1x PS/2 Keyboard/Mouse port</div>
                           <div>5. 1x RJ-45 port</div>
                           <div>6. 1x Optical Out Connector</div>
                           <div>7. 5 Audio jacks</div>
                        </Popup>

                    </div>


                    <div class = "rework">
                        <div class='text'>

                        
                    <b>Memory</b>
                    <div id='title'>
                            <p>Corsair Vengeance LPX 16 GB DDR3 1600MHz</p>
                        </div>
                    
                        <p><b>Information</b></p>

                        <Popup trigger= 
                        {<p class='text'><b>What is RAM?</b></p>}>
                           <div>
                           RAM or Random Access Memory is a hardware component which is a temporary storage. The computer can access this storage much faster than HDD and SSD.
                            </div>
                        </Popup>

                        <p>There are different speeds that you can get, the <b>more</b> the MHz the <b>faster</b> the RAM.</p>
                        <p>DDR4 is relatively better but the motherboard support DDR3 only.</p>
                        <p>This perticular RAM should be enough for GTA 5.</p>
                        
                        </div>

                
                    </div>


                    <div class = "rework">
                        <div class='text'>

                       
                    <b>Storage</b>
                    <div id='title'>
                            <p>Samsung 970 Evo 500MB M.2</p>
                        </div>

                        <p><b>Information</b></p>
                        <p>Read up to <b>3,500MB/s</b></p>
                        <p>Write up to <b>2,700MB/s</b></p>
                        <p>SSD have a max speed of <b>600MB/s</b>, in comparison, the <b>M.2 cards can go up to 4GB/s.</b></p>

                        </div>

         


                    </div>
            </div>
        </div>
        

        
        
        
    )
    
    }