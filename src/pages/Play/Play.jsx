import "./play.scss"
import {Link} from "react-router-dom";

export default function Play() {
  return (
    <div className="play">
        <div className="back">
          <Link to="/">
          <i className="fas fa-arrow-left"></i>
            Home
          </Link>
            
        </div>
        <video className="video" autoPlay progress controls src="./The Millionaire Detective.mp4"></video>
    </div>
  )
}