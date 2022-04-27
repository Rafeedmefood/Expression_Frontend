import React, {useEffect, useState} from "react";

function Home() {
    const [isPurposeHidden, setIsPurposeHidden] = useState(false)

    useEffect(() => {
        setTimeout(function () {
            setIsPurposeHidden(true)
        }, 350)
    }, [])


    return (
        <div className="flex justify-center items-center bg-pink-sky w-full h-full min-h-screen min-w-full">
            {isPurposeHidden ?
                <div className="home-cards mt-[5%]">
                    <h2 className="home-titles mb-[1.25rem] font-Akshar font-bold text-xl">Welcome!</h2>
                    <p className="font-Cinzel font-semibold text-[12px]  text-center">
                        Hey! Thanks for stopping by :) There are a bunch of things
                        that you can do in here, whether it be trying to pic up some new coding skills or checking out my writing.
                        You can navigate through my site with the global navbar on the top right. Hovering over the buttons will allow you
                        to see what each button represents! When heading to the expression section, you will see three options: notes / videos /
                        written. The notes section will lead to all my notes, the video section being links to videos I create, and written
                        being my attempts to put feelings to paper. Hope you enjoy! If there are any questions, concerns, or comments, feel
                        free to head over to my contact section and use your preferred method of communication.
                        <br />
                        <br />
                        - Rafid
                        <br />
                        <br />
                        **This site is best viewed on 1920x1080 res**
                        <br />
                    </p>
                    <img className="rounded-xl mt-[1.25rem] mx-auto" src={require('../images/flower-gif.gif')} alt="flower"/>
                </div> :
                <div className="scale-0 w-[30%] h-[45%] m-[10%] ml-[7%]"></div>
            }
        </div>
    )

}

export default Home;