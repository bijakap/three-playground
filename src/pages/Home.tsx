import { Canvas } from "@react-three/fiber";
import Playground from "../scenes/playground";
import { useState } from "react";
import { PerformanceMonitor } from "@react-three/drei";
import { Perf } from "r3f-perf";
// import Box from "../models/Box";

const Home = () => {
  // const plane = new PlaneGeometry(5, 5);
  const [dpr, setDpr] = useState(1.5);
  return (
    <section className="w-screen h-screen">
      <Canvas dpr={dpr}>
        <Perf />
        <PerformanceMonitor
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(1)}
        />
        <Playground />
      </Canvas>
    </section>
  );
};

export default Home;
