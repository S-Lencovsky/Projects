'use client'
import React, { useEffect, useState } from 'react';

const createfireFly = () => ({
 id: Math.random(),
 top: `${Math.random()*100}%`,
 left: `${Math.random()*100}%`,
 animationDuration: `${Math.random()*5+5}s`,   
})
const FireFliesBackground = () => {

    const [fireFlies, setFireflies] = useState([])

    useEffect(() => {
        const  addFireFlyPeriodically = () => {
            const newFireFly = createfireFly();
            setFireflies((currentFireflies) => [
              ...currentFireflies.slice(-14),
              newFireFly,
            ]); 
            
        }

        const interval = setInterval(addFireFlyPeriodically, 1000)
        return () => clearInterval(interval)
        
    }, [])

    return ( 
    
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {fireFlies.map((firefly) => {
            return (
              <div 
              className="absolute w-[10px] h-[10px] rounded-full bg-firefly-radial" 
              style={{
                top: firefly.top, 
                left: firefly.left, 
                animation: `move ${firefly.animationDuration} infinite alternate` 
            }} 
              key={firefly.id} 
              
            ></div>
            );
        })}
    </div>
    );
};
 
export default FireFliesBackground;