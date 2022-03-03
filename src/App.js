import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
        <div >
            <Navigation />
            <Routes>
                <Route exact path={"/"} element={<Home />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
