import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Contacts from "./components/Contacts";
import Expression from "./components/Expression";
import StudyNotes from "./components/StudyNotes";
import Videos from "./components/Videos";
import WrittenPieces from "./components/WrittenPieces";

function App() {
  return (
    <Router>
        <Navigation />
        <div>

            <Routes>
                <Route exact path={"/"} element={<Home />} />
                <Route exact path={"/Contacts"} element={<Contacts />} />
                <Route exact path={"/Expression"} element={<Expression />} />
                <Route path={"/Expression/notes"} element={<StudyNotes/>}/>
                <Route path={"/Expression/videos"} element={<Videos/>}/>
                <Route path={"/Expression/written"} element={<WrittenPieces/>}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
