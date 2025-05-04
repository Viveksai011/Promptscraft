import React from "react";
import type { IconProps } from "@/types/icon";

function Checkcircler({ className,size = 30, color = "currentColor" }: IconProps) {
  return (
 <svg width={size} className={`${className}feather feather-check-circle`} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
  );
}

export default Checkcircler;
