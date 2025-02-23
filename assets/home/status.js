import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

export default function StatusIcon(props) {
  return (
    <Svg
      width={16} 
      height={16} 
      viewBox="0 0 16 16" 
      fill="#E5675C" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle 
        id="Ellipse 3" 
        cx={8} 
        cy={7.5}
        r={7.5} 
      />
    </Svg>
  );
}
