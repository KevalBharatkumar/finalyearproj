import "./Design.css"
import Navbar from "./Navbar"
import Popup from "reactjs-popup"
import React , {useState} from "react"
import {Container} from "react-bootstrap"


export default function Partspage(){     

    const [showhide, setShowhide]=useState();

    const handleshowhide=(event)=>{
        const x = event.target.value;
        setShowhide(x);
    } 
    function myFunc(){
        const y = document.getElementById('20')
        if(y.style.display === 'block'){
          y.style.display = ('none')
        }
       
    }





    return(
        
        <div>
            <div class = "head">
            <div class = "head">
                    <p>PCParts</p>
            </div>

                <Navbar/>
                    <Container>
                    {/* <div class = "box">
                        <b class="title">CPU</b>
                        <button class='component'>
                            Add Components
                        </button>
                        <Popup trigger= 
                        {<button class='component'>Compare</button>}>
                        <div onChange={(e)=>(handleshowhide(e))}>
                            
                            <li><button>two</button></li>
                        </div>
                    </Popup>
                    </div> */}


                <div id="20" style={{display: 'block'}}>
                    <div class="box">
                        <b>CPU</b>
                        <select class ="component" onChange={(e)=>(handleshowhide(e))}>
                            <option value="">Add Component</option>
                            <option onClick={myFunc}value="1">Ryzen</option>
                        </select>
                    </div>
                </div>

                    {
                        showhide==='1' &&  (
                            
                <div class = "box">
                <b>CPU</b>

                <div>
               
                    <div2 id="title">
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

                        )
                        
                    }
                    
                    </Container>
                  
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

    