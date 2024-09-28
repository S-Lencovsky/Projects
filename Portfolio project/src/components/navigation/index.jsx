"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import ResponsiveComponent from "../responsiveComponent";

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <ResponsiveComponent>
      {({size}) => {
        
        return size && size >= 480 ? (
          <div className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group ">
            {BtnList.map((btn, index) => {
              const angleRad = (index * angleIncrement * Math.PI) / 180;
              const radius = "calc(20vw - 1rem)";
              const x = `calc(${radius}*${Math.cos(angleRad)})`;
              const y = `calc(${radius}*${Math.sin(angleRad)})`;

              return <NavButton key={btn.label} x={x} y={y} {...btn} />;
            })}
          </div>
        ) : (
          <>
          <div className="w-full px-2.5 xs:px-0 xs:w-max flex flex-col items-start items-center justify-center relative group ">
            {BtnList.slice(0, BtnList.length/2).map((btn, index) => {
              const angleRad = (index * angleIncrement * Math.PI) / 180;
              const radius = "calc(20vw - 1rem)";
              const x = `calc(${radius}*${Math.cos(angleRad)})`;
              const y = `calc(${radius}*${Math.sin(angleRad)})`;

              return <NavButton key={btn.label} x={x} y={y} {...btn} />;
            })}
          </div>

          <div className="w-max flex items-center justify-center relative group ">
            {BtnList.slice(BtnList/2, BtnList.length).map((btn, index) => {
              const angleRad = (index * angleIncrement * Math.PI) / 180;
              const radius = "calc(20vw - 1rem)";
              const x = `calc(${radius}*${Math.cos(angleRad)})`;
              const y = `calc(${radius}*${Math.sin(angleRad)})`;

              return <NavButton key={btn.label} x={x} y={y} {...btn} />;
            })}
          </div>
          </>
        );
      }
      
      }

        </ResponsiveComponent>
    </div>
  );
};

export default Navigation;

