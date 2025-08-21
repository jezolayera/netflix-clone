import Post from "./components/post/Post";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login setUser={setUser} />}
        />

        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register setUser={setUser} />}
        />

        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />

        <Route
          path="/profile/:username"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}
export default App;
