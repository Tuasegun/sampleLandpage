import React from 'react'
import "../styles/Hero.css"
import Potrait from "../media/potrait.png"

function Hero() {
    return (
        <div className="hero-container">
        <div className="text-content">
           <div className="context">
               <div className="text-1">
                   Congratulations 
                </div>
                <div className="text-2">
                    Your transaction was done successfully.
                </div> 
            </div>
           <button className="home-button">Take Me Home</button>
        </div>
      
            <img className="avatar-potrait" src={Potrait}/>
     
        
        </div>
)
}

export default Hero
