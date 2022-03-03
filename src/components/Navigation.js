import React, {useState} from "react";
import {Link} from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";
import {BiHomeHeart} from "react-icons/bi";


function Navigation() {
    const [isToggled, setIsToggle] = useState(false)
    const handleSubmit = () => {
      setIsToggle((prev) => !prev)
    }


    return (
        <div className="fixed w-full z-1 mx-0 my-0">
                {isToggled ?
                    (<button className={"float-right m-1"} onClick={() => handleSubmit}><AiOutlineMenu size={40}/></button>) :
                    (
                        <div className="">
                            <Link  className="float-right" to="/"> <Icons icon={ <BiHomeHeart size={20} /> } text={"Home"} /> </Link>
                        </div>
                    )
                }
        </div>
    )
}

function Icons({icon, text}) {
    return (
        <div className="icons group">
            {icon}
            <span className="icon-name group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}

export default Navigation;