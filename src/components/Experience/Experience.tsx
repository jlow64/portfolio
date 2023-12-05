import * as THREE from 'three';
import {
  Text,
  Environment,
  Float,
  ScrollControls,
  Resize,
} from '@react-three/drei';
import { EffectComposer, Vignette } from '@react-three/postprocessing';
import { useRef, Suspense, MutableRefObject } from 'react';
import Macbook from '@/components/Macbook';
import Cat from '@/components/Cat';

export type ExperienceProps = {
  portal: MutableRefObject<HTMLDivElement>;
};

export default function Experience({ portal }: ExperienceProps) {
  const light = useRef(null!);
  const textRef = useRef(null!);

  // useHelper(light, THREE.PointLightHelper);

  const lightPosition = new THREE.Vector3(0, 1, -3);
  const macPosition = new THREE.Vector3(0, 0.5, -2);
  const catPosition = new THREE.Vector3(1.5, 0, -2);
  const textPosition = new THREE.Vector3(0, 0.5, 0.5);

  return (
    <>
      <EffectComposer>
        <Vignette eskil={false} offset={0.1} darkness={1} />
        {/* <SelectiveBloom lights={[light]} selection={[textRef]} /> */}
      </EffectComposer>
      <ScrollControls pages={4} damping={0.3}>
        <Suspense fallback={null}>
          {/* <axesHelper scale={2} position={[0, 0, 0]} /> */}
          <Environment preset="city" />
          <color args={['#1a1a24']} attach="background" />
          <rectAreaLight
            ref={light}
            width={2.5}
            height={1.65}
            intensity={65}
            color={'#a1c3df'}
            rotation={[0, Math.PI, 0]}
            position={lightPosition}
          />
          <Float rotationIntensity={0.01}>
            <Resize scale={4}>
              <Macbook portal={portal} position={macPosition} scale={0.5} />
              <Cat position={catPosition} rotation-y={-0.2} scale={0.4} />
            </Resize>

            <Resize>
              <Text
                ref={textRef}
                font="./fonts/PlusJakartaSans.ttf"
                fontSize={0.5}
                position={textPosition}
                rotation={[0, Math.PI * 1.6, 0]}
                maxWidth={0.5}
                textAlign="center"
              >
                Justin Low
              </Text>
            </Resize>
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
