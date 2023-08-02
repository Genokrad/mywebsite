import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  // SoftShadows,
  useGLTF,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
/* eslint-disable */
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={10} />
      <spotLight
        intensity={10}
        position={[-20, 50, 10]}
        angle={12}
        penumbra={1}
        castShadow
        shadow-mapsize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChanges = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChanges);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChanges);
    };
  }, []);

  return (
    <Canvas
      frameLoop="demand" // здесь используйте 'frameloop' вместо 'frameLoop'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
/* eslint-enable */

export default ComputersCanvas;
