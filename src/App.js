import "./app.scss";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Play from "./pages/Play/Play";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watch from "./pages/watch/Watch";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/movies" element={<Home type="movie" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </Router>
  );
}

export default App;
