import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { useRef, MutableRefObject } from 'react';
import { Loader } from '@react-three/drei';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Experience from '@/components/Experience';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const domContainer = useRef<HTMLDivElement>(null);

  return (
    <div className="domContainer" ref={domContainer}>
      <Canvas
        flat
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-8, 1, 2],
        }}
        eventPrefix="page"
      >
        <Perf position="top-left" />
        <Experience portal={domContainer as MutableRefObject<HTMLDivElement>} />
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;
