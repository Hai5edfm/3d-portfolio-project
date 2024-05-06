import { useGLTF } from "@react-three/drei";
import skyScene from "../../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Sky = ({ isRotating }: any) => {
  const sky = useGLTF(skyScene);
  const skyRef: any = useRef();

  useFrame((_, delta) => {
    if (!skyRef.current) return;
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};
