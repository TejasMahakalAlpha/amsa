// src/components/canvas/AboutCanvas.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedTorus = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.2, 0.4, 150, 20]} />
      <meshStandardMaterial
        color="#00c6ff"
        wireframe
        emissive="#00ffcc"
        emissiveIntensity={0.7}
        toneMapped={false}
      />
    </mesh>
  );
};

const AboutCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 65 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />

      {/* 3D Shape */}
      <AnimatedTorus />

      {/* Sparkles */}
      <Sparkles count={120} speed={1.5} size={2} scale={[10, 10, 10]} color="#00c6ff" />
    </Canvas>
  );
};

export default AboutCanvas;
