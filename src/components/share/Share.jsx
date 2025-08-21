import'./share.scss'

export default function Share() {
  return (
    <div className='share'>
        <div className='shareWrapper'>
            <div className="shareTop">
                <img className='shareProfileImg' src="/assets/person/1.jpg" alt="" />
                <input 
                placeholder="What's in your mind Zeke?" 
                className='shareInput' />
            </div>
            <hr className='shareHr' />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <i style={{color:"tomato"}} className='fas fa-images shareIcon'></i>
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                </div>
                <div className="shareOptions">
                    <div className="shareOption">
                        <i style={{color:"blue"}} className='fas fa-tag shareIcon'></i>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                </div>
                <div className="shareOptions">
                    <div className="shareOption">
                        <i style={{color:"green"}} className='fas fa-map-marker-alt shareIcon'></i>
                        <span className='shareOptionText'>Location</span>
                    </div>
                </div>
                <div className="shareOptions">
                    <div className="shareOption">
                        <i style={{color:"goldenrod"}} className='far fa-smile shareIcon'></i>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}
