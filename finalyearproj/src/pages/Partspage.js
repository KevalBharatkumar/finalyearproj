import "./Design.css"
import Navbar from "./Navbar"
import Popup from "reactjs-popup"
import React , {useState} from "react"


export default function Partspage(){    
    
    const [showhide, setShowhide]=useState();
    const [showhide2, setShowhide2]=useState();
    const [showhide3, setShowhide3]=useState();
    const [showhide4, setShowhide4]=useState();
    const [showhide5, setShowhide5]=useState();

    const handleshowhide=(event)=>{
        const y = event.target.value;
        setShowhide(y);
    }
    const handleshowhide2=(event)=>{
        const y = event.target.value;
        setShowhide2(y);
    }
    const handleshowhide3=(event)=>{
        const y = event.target.value;
        setShowhide3(y);
    }
    const handleshowhide4=(event)=>{
        const y = event.target.value;
        setShowhide4(y);
    }
    const handleshowhide5=(event)=>{
        const y = event.target.value;
        setShowhide5(y);
    }

    return(
        
        <div>
            <div class = "head">
                <header>PCParts</header>
            </div>
            
            <Navbar/>
            <div class='head'>
                <p><b>Choose your Components</b></p>
            </div>
        <div>

   
        <table class='table'>
            <tr>
                <th class='rework2'>
                    CPU
                </th>
                <th class='rework2'>
                    GPU
                </th>
                <th class='rework2'>
                    Motherboard
                </th>
                <th class='rework2'>
                    Memory
                </th>
                <th class='rework2'>
                    Storage
                </th>

            </tr>

            <tr >
                <th class='rework2' >
                    <select onChange={(e)=>(handleshowhide(e))}>
                        <option value="">Add Component</option>
                        <option value="1">AMD Ryzen 5 3600X</option>
                        <option value="2">AMD X8 FX-8350</option>
                        <option value="3">AMD Ryzen 5 5600X</option>
                    </select>
                </th>
                <th class='rework2' >
                    <select onChange={(e)=>(handleshowhide2(e))}>
                        <option value="">Add Component</option>
                        <option value="1">GeForce RTX 2080</option>
                        <option value="2">NVIDIA GTX 660 2GB</option>
                        <option value="3">NVIDIA GeForce 1080Ti 11GB</option>
                    </select>
                </th>
                <th class='rework2' >
                    <select onChange={(e)=>(handleshowhide3(e))}>
                        <option value="">Add Component</option>
                        <option value="1">Asus ROG STRIX B550-F GAMING WIFI II ATX AM4 Motherboard</option>
                        <option value="2">Gigabyte GA-970-Gaming SLI</option>
                        <option value="3">MSI MAG B550 TOMAHAWK MAX WIFI</option>
                    </select>
                </th>
                <th class='rework2' >
                    <select onChange={(e)=>(handleshowhide4(e))}>
                        <option value="">Add Component</option>
                        <option value="1">Corsair Vengeance LPX 16 GB 3200MHz</option>
                        <option value="2">Corsair Vengeance LPX 16 GB DDR3 1600MHz</option>
                    </select>
                </th>
                
                <th class='rework2'>
                    <select onChange={(e)=>(handleshowhide5(e))}>
                        <option value="">Add Component</option>
                        <option value="1">Samsung 970 Pro 512MB M.2</option>
                        <option value="2">Samsung 970 Evo 500MB M.2</option>
                    </select>
                </th>
            </tr>
            
            </table>
         
            <div class="rework3" id='CPU'>

                <div id='AMD Ryzen 5 3600x'>
                        {
                            showhide === '1' &&(
                                <div2 class='text'>
                                    <p>AMD Ryzen 5 3600x</p>
                    
                            <p><b>Information</b></p>

                                
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


                                </div2>
                            )
                        }
                </div>
                
                <div id='AMD X8 FX-8350'>
                    {
                        showhide === '2' &&(
                            <div2 class='text'> 
                                
                                <b>CPU</b>
                                <p>AMD X8 FX-8350</p>
                                <p><b>Information</b></p>

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
                                    <div>
                                        A CPU core is a processing unit that can execute instructions.
                                    </div>
                                </Popup>

                                <Popup trigger= 
                                {<p class='text'>CPU Cache:  <b>8MB</b></p>}>
                                    <div>
                                        This is short term memory where information is stored for retrival. 
                                        It is used by the CPU to reduce the time for memory retrival from the main access memory.
                                    </div>
                                </Popup>

                                <Popup trigger= 
                                {<p class='text'>Memory Support: <b>DDR3 RAM</b></p>}>
                                    <div>
                                        DDR3 RAM is supported with this CPU.
                                    </div>
                                </Popup>     
                            </div2>
                        )
                    }
                </div>

                <div id='AMD Ryzen 5 5600X'>
                    {
                        showhide === '3' &&(
                            <div2 class='text'>
                                <p>AMD Ryzen 5 5600X</p>
                                <p><b>Information</b></p>
                                
                                <Popup trigger= 
                                {<p class='text'><b>What is a CPU?</b></p>}>
                                    <div>
                                        The CPU stands for central processing unit and is initially the brain of the computer. This provides instructions and power for the computer to function together.
                                    </div>
                                </Popup>

                        <Popup trigger= 
                        {<p class='text'>ClockSpeed: <b>3.7GHz</b></p>}>
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
                        {<p class='text'>CPU Cache:  <b>32MB</b></p>}>
                           <div>This is short term memory where information is stored for retrival. 
                            It is used by the CPU to reduce the time for memory retrival from the main access memory.
                            </div>
                        </Popup>

                        <Popup trigger= 
                        {<p class='text'>Memory Support: <b>DDR4 RAM</b></p>}>
                           <div>DDR4 RAM is supported with the Ryzen 5000 series. DDR5 is <b>NOT</b> supported with this CPU.</div>
                        </Popup>     

                            </div2>
                        )
                    }

                </div>
            
            </div>

            <div class="rework3" id='GPU'>

                    <div id='GeForce RTX 2080'>
                    {
                            showhide2 === '1' &&(
                            <div2>
                                <p>GeForce RTX 2080</p>

                                <p><b>Information</b></p>
                    
                                <Popup trigger= 
                                {<p class='text'><b>What is a GPU?</b></p>}>
                                   <div>
                                    The GPU stands for graphics processing unit. The GPU renders images and grpahics by performing mathematical calculations.
                                   </div>
                                </Popup>
        
                                <Popup trigger= 
                                {<p class='text'>Base Clock Speed: <b>1410MHz</b></p>}>
                                   <div>
                                    The clockspeed measures the number of cycles your CPU executes which is then measured in gigahertz.
                                    Ideally, the faster the clocksped, the faster the CPU. However alot of different factors play into this.
                                   </div>
                                </Popup>
                                
                                <Popup trigger= 
                                {<p class='text'>Boost Clock Speed: <b>1665MHz</b></p>}>
                                   <div>
                                    The clockspeed measures the number of cycles your CPU executes which is then measured in gigahertz.
                                    Ideally, the faster the clocksped, the faster the CPU. However alot of different factors play into this.
                                   </div>
                                </Popup>
        
                                <Popup trigger= 
                                {<p class='text'>Memory Size: <b>8GB</b></p>}>
                                   <div>
                                    The clockspeed measures the number of cycles your CPU executes which is then measured in gigahertz.
                                    Ideally, the faster the clocksped, the faster the CPU. However alot of different factors play into this.
                                   </div>
                                </Popup>
        
                                <Popup trigger= 
                                {<p class='text'>Memory Type: <b>GDDR6</b></p>}>
                                   <div>
                                    The clockspeed measures the number of cycles your CPU executes which is then measured in gigahertz.
                                    Ideally, the faster the clocksped, the faster the CPU. However alot of different factors play into this.
                                   </div>
                                </Popup>
        
                                <Popup trigger= 
                                {<p class='text'>Outputs: <b>1x HDMI 2.0</b>,<b> 3x DisplayPort</b>,<b> 1x USB Type-C</b></p>}>
                                   <div>
                                    The clockspeed measures the number of cycles your CPU executes which is then measured in gigahertz.
                                    Ideally, the faster the clocksped, the faster the CPU. However alot of different factors play into this.
                                   </div>
                                </Popup>
        
                        
                            </div2>
                                
                            )
                        }
                    </div>

                    <div id='NVIDIA GTX 660 2GB'>
                        {
                            showhide2 === '2' &&(
                                <div2 class='text'>
                                     <p>NVIDIA GTX 660 2GB</p>

                                    <p><b>Information</b></p>


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

                                </div2>
                            )
                        }
                    </div>

                    <div id='NVIDIA GeForce 1080Ti 11GB'>
                        {
                            showhide2 === '3' &&(
                                <div2 class='text'>
                                    <p>NVIDIA GeForce 1080Ti 11GB</p>

                                        <p><b>Information</b></p>

                                        <Popup trigger= 
                                        {<p class='text'><b>What is a GPU?</b></p>}>
                                        <div>
                                            The GPU stands for graphics processing unit. The GPU renders images and grpahics by performing mathematical calculations.
                                        </div>
                                        </Popup>

                                        <Popup trigger= 
                                        {<p class='text'>Base Clock Speed: <b>1480MHz</b></p>}>
                                        <div>
                                            The clockspeed in a GPU is like the clock speed in a CPU. It is usually represents
                                            how many instructions your GPU can process each second.
                                        </div>
                                        </Popup>

                                        <Popup trigger= 
                                        {<p class='text'>Boost Clock Speed: <b>1582MHz</b></p>}>
                                            <div>
                                            Depending on the load of power, the GPU can increase its clockspeed to a maximum depending on the card.
                                        </div>
                                        </Popup>

                                        <Popup trigger= 
                                        {<p class='text'>Memory Size: <b>11GB</b></p>}>
                                            <div>Also known as VRAM, It is similar to RAM however, the VRAM is memory that your GPU uses to render images to your screen.</div>
                                        </Popup>

                                        <p class='text'>Memory Type: <b>GDDR6</b></p>

                                        <Popup trigger= 
                                        {<p class='text'><b>Outputs</b></p>}>
                                        <div><b>1x HDMI</b>,<b> 3x DisplayPort</b></div>                    
                                        </Popup>

                                </div2>
                            )
                        }
                    </div>

            </div>   

            <div class="rework3" id='Motherboard'>

                    <div id='Asus ROG STRIX B550-F GAMING WIFI II ATX AM4 Motherboard'>
                        {
                            showhide3 ==='1' &&(
                            <div2 class='text'>

                        <b>Motherboard</b>
                        <div id='title'>
                            <p>	Asus ROG STRIX B550-F GAMING WIFI II ATX AM4 Motherboard</p>
                        </div>

                        <p><b>Information</b></p>
                        

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
                    </div2>

                            )
                        }
                                           
                    </div>

                    <div id='Gigabyte GA-970-Gaming SLI'>
                        {
                            showhide3 === '2' &&(
                                <div2 class="text">

                                <p>Gigabyte GA-970-Gaming SLI</p>

                        <p><b>Information</b></p>

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

                                </div2>
                            )
                        }
                    </div>

                    <div id='MSI MAG B550 TOMAHAWK MAX WIFI'>
                        {
                            showhide3 === '3' &&(
                                <div2 class='text'>

                        <div id='title'>
                            <p>MSI MAG B550 TOMAHAWK MAX WIFI</p>
                        </div>

                        <p><b>Information</b></p>
                    
                        <Popup trigger= 
                        {<p class='text'><b>What is a Motherboard?</b></p>}>
                           <div>
                          The Motherboard is the main circuit board of the computer where all components and external peripherals are connected.
                           </div>
                        </Popup>

                        <Popup trigger= 
                        {<p class='text'>AMD AM4 Socket for <b>AMD Ryzen 5000, 4000 and 3000 series</b></p>}>
                           <div>The socket for the motherboard is AMD ready where only the Ryzen 3000 and 5000 series are compatible with this motherboard.</div>
                        </Popup> 

                        <Popup trigger= 
                        {<p class='text'><b>Dual M.2</b> Slots with heatsinks</p>}>
                           <div>This motherboard comes with a Dual M.2 slots with heatsinks on the motherboard.</div>
                        </Popup>

                        <Popup trigger= 
                        {<p class='text'><b>Connectivity ports</b></p>}>
                           <div>1x USB-c 3.1 - 1x USB 3.1 - 2x USB 3.0 - 2x USB 2.0</div>
                           <div>1x Display Port</div>
                           <div>1x HDMI 2.1</div>
                           <div>2x SMA Antenna</div>
                           <div>1x PS/2 - Keyboard and Mouse</div>
                           <div>1x RJ-45</div>
                           <div>5x 3.5mm Jacks - Audio in and out including microphone port </div>
                        </Popup>

                       
                        <p class='text'>Built in Wi-Fi 6E and Bluetooth 5.2</p>
                        

                                </div2>
                            )
                        }

                    </div>

            </div>

            <div class="rework3" id='RAM'>

                    <div id='Corsair Vengeance LPX 16 GB 3200MHz'>
                        {
                            showhide4 ==='1' &&(
                            <div2 class='text'>
                                <b>Memory</b>
                                    <div id='title'>
                                        <p>Corsair Vengeance LPX 16 GB 3200MHz</p>
                                    </div>

                                    <p><b>Information</b></p>

                                    <Popup trigger= 
                                    {<p class='text'><b>What is RAM?</b></p>}>
                                    <div>
                                    RAM or Random Access Memory is a hardware component which is a temporary storage. 
                                    The computer can access this storage much faster than HDD and SSD.
                                        </div>
                                    </Popup>

                                    <p>There are different speeds that you can get, the <b>more</b> the MHz the <b>faster</b> the RAM.</p>
                                    <p>This perticular RAM should be enough for Starfield.</p>          

                                    <Popup trigger= 
                                    {<button class='popup'>Compare</button>}>
                                    <div></div>
                                    </Popup>


                            </div2>
                            )
                        }
                  
                    
                    </div>

                    <div id='Corsair Vengeance LPX 16 GB DDR3 1600MHz'>
                        {
                            showhide4 === '2' &&(
                                <div2 class='text'>

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

                                </div2>
                            )
                        }

                    </div>
            
            </div>

            <div class="rework3" id='Storage'>

                    <div id='Samsung 970 Pro 512MB M.2'>
                        {
                            showhide5 ==='1'&&(
                                <div2 class='text'>
                                    
                                <div class='title'>
                                        <p>Samsung 970 Pro 512MB M.2</p>
                                    </div>

                                    <p><b>Information</b></p>
                                    <p>Read up to <b>3,500MB/s</b></p>
                                    <p>Write up to <b>2,700MB/s</b></p>
                                    <p>SSD have a max speed of <b>600MB/s</b>,
                                    in comparison, the <b>M.2 cards can go up to 4GB/s.</b></p>         
                            </div2>
                            )
                        }
                  
                    
                    </div>

                    <div id='Samsung 970 Evo 500MB M.2'>
                   {
                    showhide5 ==='2' &&(
                        <div2 class='text'>
                             <b>Storage</b>
                    <div class='title'>
                            <p>Samsung 970 Evo 500MB M.2</p>
                        </div>

                        <p><b>Information</b></p>
                        <p>Read up to <b>3,500MB/s</b></p>
                        <p>Write up to <b>2,700MB/s</b></p>
                        <p>SSD have a max speed of <b>600MB/s</b>, in comparison, the <b>M.2 cards can go up to 4GB/s.</b></p>

                        </div2>
                    )
                   }

                    </div>

            </div>
             
       
                
    </div>

            

                  
           
                


        </div>
           
      
        

        
        
        
    )

    
    }

    