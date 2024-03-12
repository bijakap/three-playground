import { useBox, BoxProps } from "@react-three/cannon";
import { Mesh } from "three";

const Cube = (props: BoxProps) => {
  const [ref] = useBox<Mesh>(() => ({
    mass: 1,
    position: [0, 5, 0],
    ...props,
  }));
  return (
    <mesh castShadow ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Cube;
