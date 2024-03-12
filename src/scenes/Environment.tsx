import {
  AccumulativeShadows,
  OrbitControls,
  RandomizedLight,
} from "@react-three/drei";
import EnvComponent from "../components/Environment";
import { Sphere } from "../models";

const EnvironmentPlaygrounds = () => {
  return (
    <>
      <group position={[0, -0.65, 0]}>
        <Sphere />
        <AccumulativeShadows
          frames={100}
          color="purple"
          colorBlend={0.5}
          opacity={1}
          scale={10}
          alphaTest={0.85}
        >
          <RandomizedLight
            amount={8}
            radius={5}
            ambient={0.5}
            position={[5, 3, 2]}
            bias={0.001}
          />
        </AccumulativeShadows>
      </group>
      <EnvComponent />
      <OrbitControls
        autoRotate
        autoRotateSpeed={4}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
      />
    </>
  );
};

export default EnvironmentPlaygrounds;
