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
            { id: 'C', value: 3, label: 'What is a Motherboard?', trigger:'C'},
            { id: 'D', value: 4, label: 'What is RAM?', trigger:'D'},
        ],

    }, 
    {
        id: 'A',
        message: ' The CPU stands for central processing unit and is initially the brain of the computer. This provides instructions and power for the computer to function together.',
        trigger: '1'
    },
    {
        id: 'B',
        message: 'The GPU stands for graphics processing unit. The GPU renders images and grpahics by performing mathematical calculations.',
        trigger: '1'
    },
    {
        id: 'C',
        message: 'The Motherboard is the main circuit board of the computer where all components and external peripherals are connected.',
        trigger: '1'
    },
    {
        id: 'D',
        message: 'RAM or Random Access Memory is a hardware component which is a temporary storage. The computer can access this storage much faster than HDD and SSD.',
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
