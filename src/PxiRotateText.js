import { Stage, Text, useTick } from "@pixi/react";
import { TextStyle } from "pixi.js";
import { useState } from "react";

function PixiRotateText() {
  return (
    <Stage>
      <RotatingText />
    </Stage>
  );
}

function RotatingText() {
  const [rotation, setRotation] = useState(0);
  useTick((delta) => {
    setRotation(rotation + 0.01 * delta);
  });
  return (
    <Text
      text="Hello World"
      x={100}
      y={100}
      rotation={rotation}
      anchor={0.5}
      style={new TextStyle({ fill: "white" })}
    />
  );
}

export default PixiRotateText;
