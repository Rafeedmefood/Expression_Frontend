import React, {useEffect, useState} from "react";

function Home() {
    const [isPurposeHidden, setIsPurposeHidden] = useState(false)

    useEffect(() => {
        setTimeout(function () {
            setIsPurposeHidden(true)
        }, 300)
    }, [])


    return (
        <div className="flex justify-center items-center bg-pink-sky w-full h-full min-h-screen min-w-full">
            {isPurposeHidden ?
                <div className="home-cards ml-[7%]">
                    <h2 className="home-titles">Welcome to My Site!</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat
                    </p>
                    <img className="mx-auto" src={require('../images/flower-gif.gif')} alt="flower"/>
                </div> :
                <div className="scale-0 w-[30%] h-[45%] m-[10%] ml-[7%]"></div>
            }
        </div>
    )

}

export default Home;