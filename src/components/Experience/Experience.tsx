// import * as THREE from 'three';
import { Text, Environment, Float, ScrollControls } from '@react-three/drei';
import { Vignette } from '@react-three/postprocessing';
import { useRef, Suspense, MutableRefObject } from 'react';
// import { Group } from 'three';
import { useThree } from '@react-three/fiber';
// import styles from './Experience.module.css';
// import Website from '@/components/Website';
import Macbook from '@/components/Macbook';
import { EffectComposer } from '@react-three/postprocessing';
// import Cat from '@/components/Cat';

export type ExperienceProps = {
  portal: MutableRefObject<HTMLDivElement>;
};

export default function Experience({ portal }: ExperienceProps) {
  // const catRef = useRef<Group>(null!);
  const light = useRef(null!);

  const { viewport } = useThree();

  // useHelper(light, THREE.PointLightHelper);

  return (
    <>
      {/* <OrbitControls /> */}
      <EffectComposer>
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
      <ScrollControls pages={4} damping={0.3}>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <color args={['#1a1a24']} attach="background" />
          <Float rotationIntensity={0.01}>
            <group>
              <rectAreaLight
                ref={light}
                width={2.5}
                height={1.65}
                intensity={65}
                color={'#a1c3df'}
                rotation={[0, Math.PI / 0.89, 0]}
                position={[2, 1, -9]}
              />
              {/* Macbook */}
              <Macbook portal={portal} position={[2, -1, -9]} />

              {/* Cat */}
              {/* <Cat
                ref={catRef}
                position={[viewport.width / 2.2, -viewport.height / 8, -4]}
                rotation-y={-0.2}
                scale={viewport.width / 14}
              /> */}

              <Text
                font="./fonts/PlusJakartaSans.ttf"
                fontSize={viewport.width * 0.05}
                position={[0, 0.5, 0]}
                rotation={[0, Math.PI * 1.6, 0]}
                maxWidth={1}
                textAlign="center"
              >
                Justin Low
              </Text>
            </group>
          </Float>
        </Suspense>
      </ScrollControls>

      {/* <ContactShadows
        opacity={0.4}
        scale={5}
        blur={2.4}
      /> */}
    </>
  );
}
