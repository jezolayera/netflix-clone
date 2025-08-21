import "./topbar.scss";
import { useNavigate } from "react-router-dom";

export default function Topbar({ user }) {
  const navigate = useNavigate();

  return (
    <div className="topbarContainer">
      {/* LEFT: Logo */}
      <div className="topbarLeft" onClick={() => navigate("/")}>
        <span className="logo">Zekesocial</span>
      </div>

      {/* CENTER: Search Bar */}
      <div className="topbarCenter">
        <div className="searchbar">
          <i className="fas fa-search searchIcon"></i>
          <input
            placeholder="Search for friends, posts or videos"
            className="searchInput"
          />
        </div>
      </div>

      {/* RIGHT: Links, Icons, Profile */}
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink" onClick={() => navigate("/")}>Home</span>
          {user && (
            <span
              className="topbarLink"
              onClick={() => navigate(`/profile/${user.username}`)}
            >
              Profile
            </span>
          )}
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <i className="fas fa-user"></i>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <i className="fas fa-comment"></i>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <i className="fas fa-bell"></i>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        {user && (
          <img
            src="/assets/person/1.jpg"
            alt=""
            className="topbarImg"
            onClick={() => navigate(`/profile/${user.username}`)}
          />
        )}
      </div>
    </div>
  );
}
