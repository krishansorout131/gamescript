import React from "react";
import "./main.css"
import cartoon1 from "./images/cartoon1.jpg";
import cartoon2 from "./images/cartoon2.jpg";
import { useState } from "react";



const Main = () => {
    const[win,setWin]=useState(0);
    const[win2,setWin2]=useState(0);
    const[power,setPower]=useState(100);
    

    function refreshPage() {
		window.location.reload(false);
	}
    

 function onwin(){
     if(power<=0){
     setWin(win+1);
     }
     if(win===2){
         document.getElementById("h3").innerHTML="Player1 Won The Tournament"
       
    }
 }

 function onwin2(){
    if(power<=0){
    setWin2(win2+1);
    }
    if(win2===2){
        document.getElementById("h3").innerHTML="Player2 Won The Tournament"
      
   }
}

    

const fire1 =()=>{
        setPower(power-(Math.random()*100));

        if(power<=0){
    const h1=document.createElement("h1");
    h1.setAttribute("id","s1");
    h1.innerHTML=`Player1-Won`;
    document.body.appendChild(h1);
    setPower(100);
    onwin();

}

    }
    
    
const fire2 =()=>{
        setPower(power-(Math.random()*100));

        if(power<=0){
    const h1=document.createElement("h1");
    h1.setAttribute("id","s1");
    h1.innerHTML=`Player2-Won`;
    document.body.appendChild(h1);
    setPower(100);
    onwin2();
}


    }


   
    return (<>
<button onClick={refreshPage} id="newstart">Start New Game</button>
    <h1 className="heading">Shooting Game</h1>
    <p id="option">click one by one to both fire buttons</p>
    
        <div className="cartoon">
            <img id="cartoon1" className="c1" src={cartoon1} alt="cartoon"  />
            <img className="c2" src={cartoon2} alt="" />
          <div className="myGame"></div>
        </div>
        <button  className="f1" onClick={fire1}>Fire</button>
        <button  className="f2" onClick={fire2}>Fire</button>
        <h1 id="h1" >Player1 - Won:{win}</h1>
         <h1 id="h2">Player2 - Won:{win2}</h1>
         <h1 id="h3"></h1>
        
        </>
    )
}

export default Main;



