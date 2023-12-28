
import { interpolate, useCurrentFrame } from "remotion";


export default function Intro(){
    const frame = useCurrentFrame(); 
    const up = interpolate(frame, [0, 10], [600,  -100],{
        extrapolateRight: "clamp",
      });
    return(
        <>
        <div  className="text-8xl flex justify-center items-center w-screen font-bold bg-orange-400">
        <h1 style={{  transform: `translateY(${up}px)`}}>Hello</h1>
        <h1 style={{  transform: `translateY(${up}px)`}}>Hello</h1>
        <h1>This is a change</h1>
        </div>
        </>
    )
}