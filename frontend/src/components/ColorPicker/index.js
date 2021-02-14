import React, { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

const ColorPicker = () => {
  const [color, setColor] = useState("#b32aa9");

  return (
    <div className="colorPicker__wrapper">
      <HexColorPicker color={color} onChange={setColor} />
      <HexColorInput color={color} onChange={setColor} />
    </div>
  );
}

export default ColorPicker;
