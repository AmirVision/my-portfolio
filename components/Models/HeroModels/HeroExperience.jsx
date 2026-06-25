"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMediaQuery } from "react-responsive";

const Mars = dynamic(() => import("./Mars").then((mod) => mod.Mars), { ssr: false });

const Fallback = () => (
    <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#111" wireframe />
    </mesh>
);

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 15], fov: 45 }}
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
            gl={{
                powerPreference: "high-performance",
                antialias: true,
                alpha: true,
                stencil: false,
                depth: true,
            }}
            style={{ background: "transparent" }}
        >
            <Suspense fallback={<Fallback />}>
                <OrbitControls
                    makeDefault
                    enablePan={false}
                    enableRotate={!isMobile}
                    enableZoom={!isMobile && !isTablet}
                    autoRotate={isMobile}
                    autoRotateSpeed={0.6}
                    maxDistance={20}
                    minDistance={5}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI / 2}
                />

                <hemisphereLight args={["#bcd7ff", "#16161f", 0.6]} />
                <ambientLight intensity={0.3} />

                <directionalLight
                    position={[6, 10, 6]}
                    intensity={1.6}
                    color="#fff3e0"
                    castShadow
                    shadow-mapSize={[2048, 2048]}
                    shadow-bias={-0.0004}
                />

                <directionalLight position={[-6, 4, -4]} intensity={0.6} color="#6aa3ff" />

                <pointLight position={[-3.5, 2, 3]} intensity={30} distance={14} decay={2} color="#d90429" />
                <pointLight position={[3.5, 1.5, -2]} intensity={22} distance={12} decay={2} color="#8338ec" />

                <group
                    scale={isMobile ? 0.7 : 1}
                    position={[0, -1, 0]}
                    rotation={[0, Math.PI / 4, 0]}
                >
                    <Mars />
                </group>

                <EffectComposer>
                    <Bloom
                        mipmapBlur
                        intensity={1.2}
                        luminanceThreshold={0.6}
                        luminanceSmoothing={0.9}
                    />
                </EffectComposer>
            </Suspense>
        </Canvas>
    );
};

export default HeroExperience;