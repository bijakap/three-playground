import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { PerformanceMonitor } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { HomeScene } from "../scenes";

const Home = () => {
  const [dpr, setDpr] = useState(1.5);
  return (
    <section className="w-screen h-screen">
      <Canvas dpr={dpr}>
        <Perf />
        <PerformanceMonitor
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(1)}
        />
        <HomeScene />
      </Canvas>
    </section>
  );
};

export default Home;
