import React from 'react'
import {Link} from "react-router-dom"
import "../styles/HotAccessoriesMenu.css"

const HotAccessoriesMenu = () => {
    return (
         <div className="HotAccessoriesMenu">
             <Link className="HotAccessoriesLink" to="https://www.mi.com/in/life-style#wearables">Music Store</Link>
             <Link className="HotAccessoriesLink" to="https://www.mi.com/in/smart-home#smart-home">Smart Devices</Link>
             <Link className="HotAccessoriesLink" to="https://www.mi.com/in/smart-home#smart-home   ">Home</Link>
             <Link className="HotAccessoriesLink" to="https://www.mi.com/in/life-style#travel">Lifestyle</Link>
             <Link className="HotAccessoriesLink" to="https://www.mi.com/in/smart-office#tablets">Mobile Accessories</Link>
            
        </div>
    )
}

export default HotAccessoriesMenu