import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
        <div>
        <nav id="main-navbar">
            <Link to="/">Home</Link>
        </nav>
        <Routes>
            <Route exact path={"/"} element={<Home />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
