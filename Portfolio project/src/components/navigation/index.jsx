"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import ResponsiveComponent from "../responsiveComponent";
import {motion} from 'framer-motion'

const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
}

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <ResponsiveComponent>
      {({size}) => {
        
        return size && size >= 480 ? (
          <motion.div
          
          variants={container}
          initial="hidden"
          animate="show"

          className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group ">
            {BtnList.map((btn, index) => {
              const angleRad = (index * angleIncrement * Math.PI) / 180;
              const radius = "calc(20vw - 1rem)";
              const x = `calc(${radius}*${Math.cos(angleRad)})`;
              const y = `calc(${radius}*${Math.sin(angleRad)})`;

              return <NavButton key={btn.label} x={x} y={y} {...btn} />;
            })}
          </motion.div>
        ) : (
          <>
          <motion.div
          
          variants={container}
          initial="hidden"
          animate="show" className="w-full px-2.5 xs:px-0 xs:w-max flex flex-col space-y-4 items-start xs:items-center justify-center relative group ">
            {BtnList.slice(0, BtnList.length/2).map((btn, index) => {
              
              return <NavButton key={btn.label} x={0} y={0} {...btn} />;
            })}
          </motion.div>

          <motion.div
          
          variants={container}
          initial="hidden"
          animate="show" className="w-full px-2.5 xs:px-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group ">
            {BtnList.slice(BtnList.length/2, BtnList.length).map((btn, index) => {
              

              return <NavButton key={btn.label} x={0} y={0} {...btn} labelDirection="left"/>;
            })}
          </motion.div>
          </>
        );
      }
      
      }

      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
