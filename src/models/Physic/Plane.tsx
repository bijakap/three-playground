import { usePlane, PlaneProps } from "@react-three/cannon";
import { Mesh } from "three";

const Plane = (props: PlaneProps) => {
  const [ref] = usePlane<Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));
  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#f0f0f0" />
    </mesh>
  );
};

export default Plane;
