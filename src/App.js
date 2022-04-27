import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Contacts from "./components/Contacts";
import Expression from "./components/Expression";
import StudyNotes from "./components/StudyNotes";
import Videos from "./components/Videos";
import WrittenPieces from "./components/WrittenPieces";
import {APIContextProvider} from "./components/context/APIcontext";
import WrittenViewer from "./components/WrittenViewer";
import NoteViewer from "./components/NoteViewer";
import VideoViewer from "./components/VideoViewer";

function App() {
    return (
        <Router>
            <Navigation/>
            <div>
                <APIContextProvider>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route exact path={"Contacts"} element={<Contacts/>}/>
                        <Route exact path={"Expression"}>
                            <Route index element={<Expression/>}/>
                            <Route exact path={"notes"}>
                                <Route index element={<StudyNotes/>}/>
                                <Route exact path={":id"} element={<NoteViewer/>}/>
                            </Route>
                            <Route exact path={"videos"}>
                                <Route index element={<Videos/>}/>
                                <Route exact path={":id"} element={<VideoViewer/>}/>
                            </Route>
                            <Route exact path={"written"}>
                                <Route index element={<WrittenPieces/>}/>
                                <Route exact path={":id"} element={<WrittenViewer/>}/>
                            </Route>
                        </Route>
                    </Routes>
                </APIContextProvider>
            </div>
        </Router>
    );
}

export default App;
