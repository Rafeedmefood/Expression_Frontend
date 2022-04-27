import React from "react";
import {Link, useParams} from "react-router-dom";
import useGetOperation from "./hooks/useGetOperation";

function NoteViewer() {
    const {id} = useParams();
    const data = useGetOperation(`https://expression-backend.herokuapp.com/api/note/${id}`)

    const onClick = (link) => {
        window.open(link)
    }

    return (
        <div className="bg-cartoon-sky w-full h-full min-h-screen min-w-full">
            <div className="flex justify-center items-center h-full w-full ">
                <div className="flex justify-center text-center mt-[5%]">
                    {data &&
                        <div key={data.id} className="w-[80%]">
                            <h2 className="home-titles text-white mb-[30px] text-[35px] font-Cinzel font-semibold">{data.title}</h2>
                            <p className="text-white whitespace-pre-line mb-[5%] text-xl font-Akshar">
                                {data.description}
                            </p>
                            <button onClick={() => onClick(data.link)} className="text-white mb-[5%] underline">
                                {data.link}
                            </button>
                            <br />
                            <Link className="text-white font-bold underline" to="/Expression/notes">BACK</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default NoteViewer;