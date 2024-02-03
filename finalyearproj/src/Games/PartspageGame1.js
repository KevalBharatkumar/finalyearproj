import "../pages/Design.css";
import Navbar from "../pages/Navbar";
import 'reactjs-popup/dist/index.css';
import Popup from "reactjs-popup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form'

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
                            
                                <p class='text'>ClockSpeed:</p>
                                <p class='text'>CPU Cores: 6cores</p>
                                <p class='text'>Cache:</p>
                                <p class='text'>Memory Support: DDR4 </p>
                                <p class='text'> </p>
                            </div2>

                



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
    