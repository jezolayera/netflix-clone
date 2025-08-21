import "./profile.scss"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar"
 

export default function Profile() {
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
               <div className="profileCover">
                  <img className="profileCoverImg" src="assets/post/Cover2.jpg" alt="" />
                  <img className="profileUserImg" src="assets/person/1.jpg" alt="" />
               </div>
               <div className="profileInfo">
                  <h4 className="profileInfoName">Zeke Jesse</h4>
                  <span className="profileInfoDesc">Hello guys!</span>
               </div>
            </div>
        
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
        </div>
      </div>
    </>
  )
}
