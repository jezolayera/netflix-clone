import './online.scss'

export default function Online({user}) {
  return (
    <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img src={user.profilePicture} className='rightbarProfileImg' alt='hii'/>
            <span className='rightbarOnline'></span>
        </div>
        <span className='rightbarUsername'>{user.username}</span>
    </li>
  )
}
