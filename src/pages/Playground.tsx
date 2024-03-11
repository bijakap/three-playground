import { PerformanceMonitor } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useState } from "react";
import Playground from "../scenes/playground";

const PlaygroundPage = () => {
  const [dpr, setDpr] = useState(1.5);
  return (
    <section className="w-screen h-screen">
      <Canvas dpr={dpr} shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <Perf position="bottom-left" />
        <PerformanceMonitor
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(1)}
        />
        <Playground />
      </Canvas>
    </section>
  );
};

export default PlaygroundPage;
