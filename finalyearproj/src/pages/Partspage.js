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
        const x = event.target.value;
        setShowhide(x);
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
                <p>PCParts</p>
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
                        <option value="1">Ryzen</option>
                        <option value="2">Ryzen</option>
                    </select>
                </th>
                <th class='rework2' >
                    <select onChange={(e)=>(handleshowhide2(e))}>
                        <option value="">Add Component</option>
                        <option value="2">Ryzen3</option>
                    </select>
                </th>
                <th class='rework2' >
                    <select onChange={(e)=>(handleshowhide3(e))}>
                        <option value="">Add Component</option>
                        <option value="1">Ryzen</option>
                    </select>
                </th>
                <th class='rework2' >
                    <select onChange={(e)=>(handleshowhide4(e))}>
                        <option value="">Add Component</option>
                        <option value="1">Ryzen</option>
                    </select>
                </th>
                
                <th class='rework2'>
                    <select onChange={(e)=>(handleshowhide5(e))}>
                        <option value="">Add Component</option>
                        <option value="2">Ryzen5</option>
                    </select>
                </th>
            </tr>
            
            <tr>
                <th>
                    <div class='rework2'>
                        {
                            showhide === '1' &&(
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
                            )
                        }
                        {
                            showhide === '2' &&(
                                <div2>
                                <p>AMD Ryzen 5 3600x tesrttt</p>
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
                            )
                        }

                       

                    </div>
                </th>

                <th>
                    <div class='rework2'>
                    
                    {
                            showhide2 === '2' &&(
                                <div2>
                                <p>AMD Ryzen 5 3600x tesrttt22</p>
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
                            )
                        }
                    </div>
                </th>

                <th>
                    <div class='rework2'>
                   
                    </div>
                </th>

                <th>
                    <div class='rework2'>
                  
                    
                    </div>
                </th>
                <th>
                    <div class='rework2'>
                  
                    
                    </div>
                </th>

            </tr>

        </table>
                
    </div>

            

                  
           
                


        </div>
           
      
        

        
        
        
    )

    
    }

    