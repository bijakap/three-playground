import { useEffect, useState } from "react";
import { PCube, PPlane } from "../models";
import { Physics } from "@react-three/cannon";
import { SpotLight, useDepthBuffer } from "@react-three/drei";
// import { SpotLight } from "@react-three/drei";

const PhysicScene = () => {
  const [ready, set] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => set(true), 1000);
    return () => clearTimeout(timeout);
  }, []);
  const depthBuffer = useDepthBuffer();
  return (
    <>
      <color attach="background" args={["#202020"]} />
      {/* <CameraControls /> */}
      <ambientLight intensity={0.25} />

      {/* Spotlight */}
      <SpotLight
        castShadow={true}
        penumbra={0}
        distance={30}
        angle={20}
        attenuation={0}
        anglePower={5}
        intensity={30}
        position={[0, 7, 10]}
        depthBuffer={depthBuffer}
      />

      <Physics>
        <mesh receiveShadow>
          <PPlane />
          <PCube position={[0, 5, 0]} />
          <PCube position={[0.45, 7, -0.25]} />
          <PCube position={[-0.45, 9, 0.25]} />
          {ready && <PCube position={[-0.45, 10, 0.25]} />}
        </mesh>
      </Physics>
    </>
  );
};

export default PhysicScene;
