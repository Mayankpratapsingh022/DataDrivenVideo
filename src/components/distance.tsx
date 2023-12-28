import React from "react";
import { interpolate, useCurrentFrame,interpolateColors } from "remotion";


export default function Distance({text,startcolor,endcolor}){
    const frame = useCurrentFrame(); 
    const framecolor = useCurrentFrame() / 10;
    const up = interpolate(frame, [0, 10], [600,  0],{
        extrapolateRight: "clamp",
      });
      const color = interpolateColors(frame, [2, 5], [startcolor, endcolor]);
      const sty = `text-8xl flex justify-center items-center w-screen font-bold bg-red-500` 
    return(
        <>
        <div  className={sty} style={{backgroundColor:`${color}` }}>
            <h1>{text}</h1>
        </div>
        </>
    )
}