import React from "react";
import Intro from './intro';
import { Sequence } from "remotion";
import Distance from "./components/distance";
export default function Main(){
    return(
        <>
        <Sequence durationInFrames={30}>
        <Intro/>
        </Sequence>
        <Sequence from={30 } durationInFrames={10}>
        <Distance text={"You"} startcolor={"orange"} endcolor={"yellow"}/>
        </Sequence>
        <Sequence from={40 } durationInFrames={10}>
        <Distance text={"Traveled "} startcolor={"yellow"} endcolor={"yellow"}/>
        </Sequence>
        <Sequence from={50 } durationInFrames={10}>
        <Distance text={"100km"} startcolor={"yellow"} endcolor={"#90f1ef"}/>
        </Sequence>
        <Sequence from={60 } durationInFrames={10}>
        <Distance text={"Distance"} startcolor={"yellow"} endcolor={"yellow"}/>
        </Sequence>
        <Sequence from={70 } durationInFrames={50}>
        <Distance text={"with your cycle"} startcolor={"yellow"} endcolor={"#99d98c"}/>
        </Sequence>
        <Sequence from={120 } durationInFrames={50}>
        <div>

            <h1>hello sdf</h1>
        </div>
        </Sequence>
        </>
    )
}