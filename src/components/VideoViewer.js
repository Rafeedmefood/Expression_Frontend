import React from "react";
import {Link, useParams} from "react-router-dom";
import useGetOperation from "./hooks/useGetOperation";

function VideoViewer() {
    const {id} = useParams();
    const data = useGetOperation(`https://expression-backend.herokuapp.com/api/video/${id}`)

    return (
        <div className="bg-mountain-sky w-full h-full min-h-screen min-w-full">
            <div className="flex justify-center items-center h-full w-full ">
                <div className="flex justify-center text-center mt-[5%]">
                    {data &&
                        <div key={data.id} className="w-[80%]">
                            <h2 className="home-titles text-white mb-[30px] text-[35px]">{data.title}</h2>
                            <p className="text-white whitespace-pre-line mb-[5%]">
                            </p>
                            <Link className="text-white font-bold underline" to="/Expression/written">BACK</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default VideoViewer;