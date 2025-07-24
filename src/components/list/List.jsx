import "./list.scss" 
import Listitem from "../listitem/Listitem"
import { useRef, useState } from "react";


export default function List() {
    const [isMoved,setIsMoved] = useState(false);
    const [slideNumber,setSlideNumber] = useState(0);

    
    const listRef = useRef();
    const images = 
    [   "./Net.Img/m1.jpg",
        "./Net.Img/m2.jpg",
        "./Net.Img/m3.jpg",
        "./Net.Img/m4.jpg",
        "./Net.Img/m5.jpg",
        "./Net.Img/m6.jpg",
        "./Net.Img/m7.jpg",
        "./Net.Img/m8.jpg",
        "./Net.Img/m9.jpg",
    ];
    
    const handleClick = (direction) =>{
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
  return (
    <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <i style={{display: !isMoved && 'none'}} className="fas fa-less-than sliderArrow left" onClick={()=> handleClick("left")}></i>
           
            
            <div className="container" ref={listRef}>    
                {images.map((img,i) => (
                    <Listitem key ={i} index ={i} img={img}/>
                ))}
            </div>
            <i className="fas fa-greater-than sliderArrow right" onClick={()=> handleClick("right")}></i>
        </div>
    </div>
  )
}
