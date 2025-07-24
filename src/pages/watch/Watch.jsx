import "./watch.scss"
import {Link} from "react-router-dom";

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
          <Link to="/">
          <i className="fas fa-arrow-left"></i>
            Home
          </Link>
            
        </div>
        <video className="video" autoPlay progress controls src="./Ain't.mp4"></video>
    </div>
  )
}
