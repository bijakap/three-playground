import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { PhysicScene } from "../scenes";

const PhysicPage = () => {
  return (
    <section className="w-screen h-screen">
      <Canvas dpr={[1, 2]} shadows camera={{ position: [-5, 5, 5], fov: 50 }}>
        <Perf position="bottom-left" />
        <PhysicScene />
      </Canvas>
    </section>
  );
};

export default PhysicPage;
