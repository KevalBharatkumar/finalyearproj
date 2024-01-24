import "./Design.css"
import Navbar from "./Navbar"

const hide = document.getElementsByClassName('hide');
const id = document.getElementsById('id');
var displaySetting = hide.style.display;
if(id === '/partspage/game') {
    displaySetting = 'block';
}


export default function Partspage(){

    return(

        <div>
            <div class = "head">
                <div class = "head">
                    <p>PCParts</p>
                </div>
                <Navbar/>

                    <div class = "box">

                    <div class = "hide" className = "hide" id = "/partspage/game">
                        <p>Hi</p>
                    </div>

                    </div>

                    <div class = "box2">

                    </div>

                    <div class = "box3">

                    </div>

                    <div class = "box4">

                    </div>

                    <div class = "box5">

                    </div>
                


            </div>
        </div>
        

        
        
        
    )
}
