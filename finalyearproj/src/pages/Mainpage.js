import "./Design.css"
import Navbar from "./Navbar.js"
import ChatBot from 'react-simple-chatbot';


export default function Mainpage(){


    const steps = [
    {
        id: '0',
        message: 'Hi, how may I be of assistance?',
        trigger: '1'
    }, {
        
        id: '1',
        options: [

            { id: 'A', value: 1, label: 'What is a CPU?', trigger:'A'},
            { id: 'B', value: 2, label: 'What is a GPU?', trigger:'B'},
            { id: 'C', value: 3, label: 'What is a motherboard?', trigger:'C'},
            { id: 'D', value: 4, label: 'What is RAM?', trigger:'D'},
        ],

    }, 
    {
        id: 'A',
        message: 'Something',
        trigger: '1'
    },
    {
        id: 'B',
        message: 'Something22',
        trigger: '1'
    },
    {
        id: 'C',
        message: 'Something222',
        trigger: '1'
    },
    {
        id: 'D',
        message: 'Something2222',
        trigger: '1'
    }
];
 

return(
        
<div>  
        <div class = "head">
        <header>PCParts</header>
        </div>


        <Navbar/>

        <h4 class='head'>Select a software from below:</h4>

        <div class = "dropdown">
           <button class = "buttondrp">Down</button>
                <div class = "links" >
                    <a href = "/partspage/game">Starfield</a>
                    <a href = "/Partspage/game2">GTA 5</a>
                    <a href = "/Partspage/game3">Hogwarts Legacy</a>
                </div>
        </div>


        
            <ChatBot steps={steps} />



</div>

    )   

}
