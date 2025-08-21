import'./register.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Register({setUser}) {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if(username && email && password) {
            const newUser = {username,email};
            setUser(newUser);
            navigate("/");
        } else{
            alert("Please fill all fields");
        }
    };

    const handleRegisterRedirect = () => {navigate("/login")}



  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Zekesocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Zekesocial.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className='loginInput' value={username} 
                    onChange={(e) => setUsername(e.target.value)}/>
                    <input placeholder="Email" className='loginInput' value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder="Password" className='loginInput' value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                    <input placeholder="Password Again" className='loginInput' value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                    <button className='loginButton' onClick={handleRegisterRedirect}>Sign Up</button>
                    <span className='loginForgot'>Forgot Password?</span>
                    <button className='loginRegisterButton'>
                        Log into Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
