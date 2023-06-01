import { Stage, Container, Sprite, Text, useTick } from "@pixi/react";
import { TextStyle } from "pixi.js";
import { useMemo, useRef, useReducer, useState } from "react";
import UnityComponent from "./UnityComponent";

export default function PixiRotate() {
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
    return (
      <Stage>
        <Container x={500}>
          <Text text="Hello World" />
        </Container>
        <Text
          text="Hello World"
          x={1000}
          y={100}
          rotation={rotation}
          anchor={0.5}
          style={new TextStyle({ fill: "white" })}
        />
      </Stage>
    );
  });
}
