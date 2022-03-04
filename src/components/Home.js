import React, {useEffect, useState} from "react";

function Home() {
    const [isBioHidden, setIsBioHidden] = useState(false)
    const [isPurposeHidden, setIsPurposeHidden] = useState(false)

    useEffect(() => {
        setTimeout(function () {
            setIsBioHidden(true)
        }, 1000)
        setTimeout(function () {
            setIsPurposeHidden(true)
        }, 2000)
    }, [])


    return (
        <div className="flex justify-center items-center bg-pink-sky w-full h-full min-h-screen min-w-full">
            {isBioHidden &&
                <div className="home-cards">
                    <h1 className="home-titles"> Who Am I? </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>}
            {isPurposeHidden ?
                <div className="home-cards">
                    <h2 className="home-titles">And Your Purpose?</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div> :
                <div className="scale-0 w-[18%] h-[35%] m-[10%]"></div>
            }
        </div>
    )

}

export default Home;