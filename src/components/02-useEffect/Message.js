import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [coors, setCoors] = useState({x:0,y:0});
  const { x,y} = coors;
  
  useEffect(() => {
    console.log('Component has been mounted');
    const mouseMove = ( e ) => {
         const coors = { x:e.x,y:e.y };
        // console.log(coors);

        setCoors(coors);
       
    }
    window.addEventListener( 'mousemove',mouseMove );

    return () => {
        console.log('Component has been umounted');
        window.removeEventListener( 'mousemove',mouseMove ); 
    }
  }, [])
    
  return (
    <div>
        <h1> You're great!!!!!</h1>
        <p>
            x: { x }  y: { y }
        </p>
    </div>
  )
}
