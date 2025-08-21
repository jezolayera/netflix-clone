import'./login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({setUser}) {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if(email && password) {
            const loggedInUser = {email,username:"ZekeJesse"};
            setUser(loggedInUser);
            navigate("/");
        } else{
            alert("Please enter email and password");
        }
    };

    const handleRegisterRedirect = () => {navigate("/register")}

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
                    <input placeholder="Email" className='loginInput' value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                    <input placeholder="Password" type='password' className='loginInput' value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                    <button className='loginButton' onClick={handleLogin}>Log In</button>
                    <span className='loginForgot'>Forgot Password?</span>
                    <button className='loginRegisterButton' onClick={handleRegisterRedirect}>
                        Create a New Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
