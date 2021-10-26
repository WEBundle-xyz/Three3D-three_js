import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

import './App.css';

const Box = () => {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry />
      <meshBasicMaterial color="orange" />
    </mesh>
  );
};

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas style={{ background: 'black' }}>
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
