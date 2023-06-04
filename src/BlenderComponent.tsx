
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import React from 'react';
import { Dolphin } from './Dolphin';


const BlenderComponent = () => {
  return (
  <div style={{ width: '100vw', height: '100vh' }}>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Dolphin/>
    </Canvas>
  </div>
)};

export default BlenderComponent;