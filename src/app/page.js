'use client';

import React,{useState} from 'react'
import person4 from "./images/person4.jpg";
import column from "./images/column.svg";
import row from "./images/row.svg";
import dots from "./images/dots.svg";
import Image from 'next/image'



function Card() {
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false)
  const toggle=() => {
     if (typeof window === "object") {
   var doc1 = document.querySelector(".profile_data")
    var btn = document.querySelector(".profile_dropdown_btn")
doc1.classList.toggle("active")
  }
  } 

  function handleDragStart(e) {
    setIsDragging(true);
    const data = JSON.stringify({ type: "card" });
    e.dataTransfer.setData("text/plain", data);
  }

  function handleDragEnd(e) {
    setIsDragging(false);
    e.dataTransfer.clearData();
  }


  return (
  
    

    <div className="m-6 wd h-45 p-2 br"  draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}>
                   <div className="flex justify-between relative items-center -top-12">
                   <Image className="p-px w-16 h-16 rounded-full" src={person4} />
               
                   <div className="profile_dropdown">
                      <div className="profile_dropdown_btn" onClick={toggle}>
                       <div className="profile_img">
                          <Image className="w-9 h-9" src={dots}/>
                      </div>
                       <span >
                       
                       </span>
                      </div>
                             <ul className="profile_data">
                                 <li>home</li>
                                 <li>home</li>
                                 <li>home</li>
                             </ul>  
                      </div>
                   </div>

                   <div className="usercontent">
              

                   <h4 className="text-gray-700 font-extrabold">userName</h4>
                <h4 className="text-gray-700 font-extrabold">Hellouser@gmail.com</h4>
                 <p>Hellouser@gmail.com</p>
                   </div>

                 </div> 
                 
   
  );
}

function Box({ card, moveCard,id,text }) {
  const [isOver, setIsOver] = useState(false);

  function handleDragOver(e) {
    if (e.dataTransfer.types[0] === "text/plain") {
      setIsOver(true);
      e.preventDefault();
    }
  }

  function handleDrop(e) {
    const dataJSON = e.dataTransfer.getData("text/plain");
    let data;
    try {
      data = JSON.parse(dataJSON);
    } catch {}
    if (data && data.type === "card") {
      moveCard();
    }
  }

  function handleDragLeave() {
    setIsOver(false);
  }

  return (
    <div
      className="wid_300px h-4/5 Border-1 border-zinc-500 br_left"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
      id={id}
    >
    <div className='font-semibold text-gray-700 relative px-2 py-2 '> 
    <h3 className="flex font-semibold items-center justify-between aft">{text} <span className="head_span">92</span></h3>
</div>
      {card ? <Card /> : " "}
    </div>
  );
}


export default function Home() {
   const [index, setIndex] = useState(1);

  function moveCard(i) {
    setIndex(i);
  }
   const scrollings=(e)=>{
     if (typeof window === "object") {
    let wrapping = document.getElementById("wrapping")
  
       let form   =  Math.floor(e.clientX) / 2  ;
       let px = form;
       var mouseX = e.pageX += 200;
      wrapping.scrollLeft = `${mouseX}`;
      }
 }

 const onLeave=()=>{
   if (typeof window === "object") {
      let squre = document.getElementsByClassName('squre')[0]
  squre.style.display = "none"
}
 }
 
  return (
      <>


    <div className="w-full h-screen flex justify-center flex-col items-center bg_col p-2 ">
       <div className="w-full flex justify-around flex-row flex-wrap items-center ">
                <h2 className="head_col text-4xl flex justify-between items-center" >Students <span className="span_col m-2 px-2 py-2">92</span></h2>
                
                <input type="text" className="w-100px p-2 pl-1.7 br" >
                 </input>
              <div className="stu_side_section"> 
                 <button id="filter">
                 <span>
             
               </span>

                 Filters</button>
                 
                 <div className="p-1 flex border-solid border-1 rounded-3xl br"> 
                    <span className="row_box">
                    <a  >
                      <Image src={column} />
                      </a>
                    </span>
                     <span className="colm_box">
                          
                            <Image src={row} />
                    </span>
                  </div>
                 <button id="add"> 
                <span> </span>
                 Add New Student </button>
                 </div>
             </div>


             <div className="d_grid overflow-x-auto relative" id="wrapping">
       
                <Box card={index === 1} text="New Lead" id="1"  moveCard={moveCard.bind(null, 1)} ></Box>
      <Box card={index === 2} id="2" text="Follw up" moveCard={moveCard.bind(null, 2)} ></Box>
      <Box card={index === 3} id="3"  text="Ready to Apply"  moveCard={moveCard.bind(null, 3)}></Box>
       <Box card={index === 4} id="4" text="Updated" moveCard={moveCard.bind(null, 4)}></Box>
       <Box card={index === 5} id="5" text="Pending" moveCard={moveCard.bind(null, 5)}></Box>

 
             </div>
             <div className="colm_counter" onMouseMove={scrollings} onMouseLeave={onLeave} id="scrolling">
                      <div className="sm_col squre"> </div>
                      <div className="sm_col"> </div>
                      <div className="sm_col"> </div>
                      <div className="sm_col"> </div>
                       <div className="sm_col"> </div>
                      <div className="sm_col"> </div>
                      <div className="sm_col"> </div>
                      <div className="sm_col"> </div>
                 </div>
   </div> 
      </>
    
  )
}
