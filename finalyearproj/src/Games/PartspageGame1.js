import "../pages/Design.css";
import Navbar from "../pages/Navbar";
import 'reactjs-popup/dist/index.css';
import Popup from "reactjs-popup";
import React from "react";
import "../pages/Design.css"

export default function PartspageGame1(){ 

return(
    <div>
        <div>
            <div class = "head">
                <header>PCParts</header>
            
                <Navbar/>

                <p>The software you have chosen is </p>
                <b>Starfield</b>
            </div>

                <div class = "rework">
                    <div class ='text'>
                        <b>CPU</b>

                        <p>AMD Ryzen 5 3600x</p>
                       
                        <p><b>Information</b></p>

                    </div>
                                
                    <Popup trigger= 
                        {<p class='text'><b>What is a CPU?</b></p>}>
                           <div>
                            The CPU stands for central processing unit and is initially the brain of the computer. This provides instructions and power for the computer to function together.
                           </div>
                        </Popup>

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

                </div>





                <div class = "rework">
                <div class ='text'>
                    <b>GPU - Graphics card</b>

                            <p>GeForce RTX 2080</p>

                        <p><b>Information</b></p>
                </div>

                        <Popup trigger= 
                        {<p class='text'><b>What is a GPU?</b></p>}>
                           <div>
                            The GPU stands for graphics processing unit. The GPU renders images and grpahics by performing mathematical calculations.
                           </div>
                        </Popup>

                        <Popup trigger= 
                        {<p class='text'>Base Clock Speed: <b>1410MHz</b></p>}>
                           <div>
                            The clockspeed in a GPU is like the clock speed in a CPU. It is usually represents
                            how many instructions your GPU can process each second.
                           </div>
                        </Popup>
                        
                        <Popup trigger= 
                        {<p class='text'>Boost Clock Speed: <b>1665MHz</b></p>}>
                           <div>
                            Depending on the load of power, the GPU can increase its clockspeed to a maximum depending on the card.
                           </div>
                        </Popup>

                        <Popup trigger= 
                        {<p class='text'>Memory Size: <b>8GB</b></p>}>
                           <div>Also known as VRAM, It is similar to RAM however, the VRAM is memory that your GPU uses to render images to your screen.</div>
                        </Popup>

                     
                        <p class='text'>Memory Type: <b>GDDR6</b></p>
                          

                        <Popup trigger= 
                        {<p class='text'><b>Outputs</b></p>}>
                           <div>
                           <b>1x HDMI 2.0</b>,<b> 3x DisplayPort</b>,<b> 1x USB Type-C</b>
                           </div>
                           
                        </Popup>

                     
                </div>

                




                    <div class = "rework">
                        <div class ='text'>

                        
                        <b>Motherboard</b>
                        <div id='title'>
                            <p>	Asus ROG STRIX B550-F GAMING WIFI II ATX AM4 Motherboard</p>
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
                        {<p class='text'>AMD AM4 Socket for <b>AMD Ryzen 5000 and 3000 series</b></p>}>
                          <div>The socket for the motherboard is AMD ready where only the Ryzen 3000 and 5000 series are compatible with this motherboard.</div>
                        </Popup> 

                        <Popup trigger= 
                        {<p class='text'><b>Dual M.2</b> Slots with heatsinks</p>}>
                          <div>This motherboard comes with a Dual M.2 slots with heatsinks on the motherboard.</div>
                        </Popup>
                        <Popup trigger= 
                        {<p class='text'><b>Connectivity ports</b></p>}>
                           <div>1. 4x USB 3.2 Gen 1 ports</div>
                           <div>2. 2x USB 2.0</div>
                           <div>3. 2x USB 3.2 Gen 2 port - 1x Type-A - 1x Type-C</div>
                           <div>4. Intel 2.5GB Ethernet</div>
                           <div>5. 1x HDMI 2.1 port</div>
                           <div>6. 1x DisplayPort 1.2</div>
                           <div>7. Built in Wi-Fi 6E</div>
                           <div>8. 5 Audio jacks</div>
                        </Popup>
                        <div class='text'>
                        Two way <b>AI Noise cancellation</b>
                        </div>
                        

                    



                    </div>


                    <div class = "rework">
                        <div class='text'>

                        
                    <b>Memory</b>
                    <div id='title'>
                            <p>Corsair Vengeance LPX 16 GB 3200MHz</p>
                        </div>
                    
                        <p><b>Information</b></p>

                        <Popup trigger= 
                        {<p class='text'><b>What is RAM?</b></p>}>
                           <div>
                           RAM or Random Access Memory is a hardware component which is a temporary storage. The computer can access this storage much faster than HDD and SSD.
                            </div>
                        </Popup>

                        <p>There are different speeds that you can get, the <b>more</b> the MHz the <b>faster</b> the RAM.</p>
                        <p>This perticular RAM should be enough for Starfield.</p>
                        
                        </div>
                    </div>


                    <div class = "rework">
                        <div class='text'>

                       
                    <b>Storage</b>
                    <div id='title'>
                            <p>Samsung 970 Pro 512MB M.2</p>
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
    