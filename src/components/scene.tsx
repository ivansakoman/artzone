import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import logo3d from "./../assets/3d/artzone-3d.glb";

const Logo3D: React.FC = () => {
  const { scene } = useGLTF(logo3d); // Zamijeni s pravom putanjom

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <primitive object={scene} />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};
export default Logo3D;
