import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import useGetOperation from "./hooks/useGetOperation";

function StudyNotes() {
    const [url, setUrl] = useState("https://expression-backend.herokuapp.com/api/note/all")
    const data = useGetOperation(url);
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/Expression/notes/${id}`)
    }

    return(
        <div className="bg-window w-full h-full min-h-screen min-w-full">
            <div className={"flex justify-center items-center h-full w-full"}>
                <div>
                    <h1 className={"text-center mt-[4.5%] font-Akshar text-[25px] text-white"}>Notes</h1>
                    <div className={"flex justify-center text-center "}>
                        {data &&
                            data.map(piece => {
                                return (
                                    <div key={piece.id} onClick={() => handleClick(piece.id)} className="home-cards font-Cinzel font-bold shadow-md shadow-gray-800
                                                                                                        bg-blue-300 flex-wrap m-[5%] w-[30%] min-h-[150px] flex
                                                                                                        justify-center items-center">
                                        <h2 className="home-titles">{piece.title}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudyNotes;