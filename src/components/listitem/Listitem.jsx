import { Link } from "react-router-dom";
import "./listitem.scss"
import { useState } from "react"

export default function Listitem({index,img}) {
   const [isHovered, setIsHovered] = useState(false);
   const trailer = "./Ain't.mp4";
  return (
    <div className="listitem"
      style={{left: isHovered && index * 225 - 50 + index * 2.5}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
       <img src={img} alt = {`movie- ${index}`} />
       {isHovered && (
      <>
          <video src={trailer} autoPlay={true} loop></video>
        <div className="itemInfo">
          <div className="icons">
            <Link to="/watch">
             <i className="icon fas fa-play"></i>
            </Link>
            <i className="icon fas fa-plus"></i>
            <i className="icon fas fa-thumbs-up"></i>
            <i className="icon fas fa-thumbs-down"></i>
          </div>
          <div className="itemInfoTop">
            <span>1 hour 14 mins</span>
            <span className="limit">+16</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Consectetur ea autem 
          </div>
          <div className="genre">Action</div>
        </div>
      </>
      )}
    </div>
      
  )
}
