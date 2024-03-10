import { CameraControls, MeshReflectorMaterial } from "@react-three/drei";
import Box from "../models/Box";

const Playground = () => {
  return (
    <>
      <color attach="background" args={["#191920"]} />
      <fog attach="fog" args={["#191920", 0, 15]} />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <CameraControls />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      {/* <Box position={[-1.2, 0, 0]} /> */}
      {/* <Box position={[1.2, 0, 0]} /> */}
      <group position={[0, 0, 0]}>
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          {/* <meshBasicMaterial attach="material" color={0x808080} /> */}
          <MeshReflectorMaterial
            mirror={0}
            blur={[300, 100]} // Blur ground reflections (width, height), 0 skips blur
            resolution={256}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
            reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
          />
        </mesh>
        <Box position={[1, 0, 0]} />
        <Box position={[-1, 0, 0]} />
      </group>
    </>
  );
};

export default Playground;
