import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Contacts from "./components/Contacts";
import Expression from "./components/Expression";

function App() {
  return (
    <Router>
        <Navigation />
        <div>

            <Routes>
                <Route exact path={"/"} element={<Home />} />
                <Route exact path={"/Contacts"} element={<Contacts />} />
                <Route exact path={"/Expression"} element={<Expression />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
