import "./Design.css"
import Navbar from "./Navbar.js"

export default function Mainpage(){
    return(
        
        <div class = "head">
           
            <div class = "head">
            <p>PCParts</p>
            </div>

            <Navbar/>
            
            <form>
            <input type = "search"  name = "q" placeholder = "search"></input>
            <button>search</button>
            </form>


       </div>

        

        

    )
 
   

}
