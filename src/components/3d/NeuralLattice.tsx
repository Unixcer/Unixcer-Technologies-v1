'use client';

import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function NeuralLattice() {
  const groupRef = React.useRef<THREE.Group>(null);
  const coreRef = React.useRef<THREE.Mesh>(null);

  // Generate procedural particles on a sphere for zero-byte geometry
  const particleCount = 60;
  const positions = React.useMemo(() => {
    const coords = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 1.8 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      coords[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = radius * Math.cos(phi);
    }
    return coords;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Gentle continuous idle rotation
    groupRef.current.rotation.y += delta * 0.15;
    groupRef.current.rotation.x += delta * 0.05;

    // Subtle cursor parallax responsiveness
    const targetX = state.pointer.y * 0.25;
    const targetY = state.pointer.x * 0.25;
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetY, 0.04);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -targetX, 0.04);

    // Pulse core
    if (coreRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.08;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Glowing Microservices Node */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.4, 24, 24]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#3b82f6"
          emissiveIntensity={1.2}
          roughness={0.2}
        />
      </mesh>

      {/* Primary Structural Wireframe Icosahedron */}
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          wireframe
          color="#3b82f6"
          transparent
          opacity={0.4}
          roughness={0.3}
        />
      </mesh>

      {/* Secondary Outer Distributed Lattice */}
      <mesh rotation={[0.4, 0.6, 0]}>
        <dodecahedronGeometry args={[2.2, 0]} />
        <meshStandardMaterial
          wireframe
          color="#8b5cf6"
          transparent
          opacity={0.2}
          roughness={0.4}
        />
      </mesh>

      {/* Floating Network Node Points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#38bdf8"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Ambient and Key Point Lights */}
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={1.5} color="#3b82f6" />
      <pointLight position={[-4, -4, -4]} intensity={1.0} color="#8b5cf6" />
    </group>
  );
}

