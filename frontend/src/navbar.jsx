import React, { useEffect, useState } from "react";
import Read from "./read";
import Create from "./create";
import { page, changePage } from "./universalv";

const NavBar = ()=>{

    const [selector, setSelector] = useState(<Read />)

    useEffect(()=>{
        changePage(selector)
    }, [selector])

    return(
        <div className="navBarDiv">
            <span className="navBarLeft">
                <h1 className="companyName">Young Arrow</h1>
                <p className="companyNameDown">computaverse technologies</p>
            </span>
            <span className="navBarRight">
                
            </span>
        </div>
        
    )
}


export default NavBar;