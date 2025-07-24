import { Link } from "react-router-dom"
import "./featured.scss"

export default function Featured({type}) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
        <img className="img" src="./Net.Img/Milli.png" alt="" srcset="" />
      <div className="info">
        <h1 className="imgg">MATRIX</h1>
        <span className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Magnam eligendi repellat provident quia quas. 
             Ea consequuntur unde amet quod quasi assumenda
              voluptatum totam blanditiis illo sed. 
        </span>
        <div className="buttons">
          <Link to="/play">
            <button className="play1">
                <i className="fas fa-play"></i>
                <span>Play</span>
            </button>
          </Link>
            
            <button className="more">
                <i className="fas fa-info-circle"></i>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  )
}
