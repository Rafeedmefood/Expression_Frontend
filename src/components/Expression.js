import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Expression() {
    const [showPage, setShowPage] = useState(false)

    useEffect(() => {
        setTimeout(function () {
            setShowPage(true)
        }, 350);
    }, [])

    return (
        <div className="bg-cliff w-full h-full min-h-screen min-w-full">
            <div className="flex justify-center items-center h-full w-full">
                {
                    showPage &&
                    <div className="mt-[4.5%]">
                        <h1 className="animate-fade-in-up text-center mb-[40%] font-Akshar text-white text-xl">Where Shall We Go Today?</h1>
                        <div className="flex justify-center items-center h-[80px]">
                            <Link to="/Expression/notes" replace>
                                <div
                                    className='expression-buttons'>
                                    Study Notes
                                </div>
                            </Link>
                            <Link to="/Expression/videos">
                                <div
                                    className='expression-buttons'>
                                    Videos
                                </div>
                            </Link>
                            <Link to="/Expression/written">
                                <div
                                    className='expression-buttons'>
                                    Written Pieces
                                </div>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Expression;