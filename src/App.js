import React from 'react';
import { Canvas } from '@react-three/fiber';

import './App.css';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <mesh>
          <boxBufferGeometry />
          <meshBasicMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
