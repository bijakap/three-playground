import { Perf } from "r3f-perf";
import { EnvironmentPlaygrounds } from "../scenes";
import { Canvas } from "@react-three/fiber";

const EnvPGPage = () => {
  return (
    <section className="w-screen h-screen">
      <Canvas>
        <Perf position="bottom-left" />
        <EnvironmentPlaygrounds />
      </Canvas>
    </section>
  );
};

export default EnvPGPage;
