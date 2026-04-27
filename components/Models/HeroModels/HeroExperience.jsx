"use client"

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

// Lazy-load heavy components
const Room = dynamic(() => import("./Room").then((mod) => mod.Room), { ssr: false });
const HeroLights = dynamic(() => import("./HeroLights"), { ssr: false });
const Particles = dynamic(() => import("./Particles"), { ssr: false });

// Fallback while 3D scene loads
const Fallback = () => (
    <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#111" wireframe />
    </mesh>
);

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Canvas
            camera={{ position: [0, 0, 15], fov: 45 }}
            dpr={[1, 2]}                     // cap at 2x, save GPU
            performance={{ min: 0.5 }}        // auto-adjust quality on slow devices
            frameloop="demand"                // only render when needed (interaction or animation)
            gl={{
                powerPreference: "high-performance",
                antialias: false,             // safe to disable with lights
                stencil: false,
                depth: true,
            }}
        >
            <Suspense fallback={<Fallback />}>
                <OrbitControls
                    enablePan={false}
                    enableZoom={!isTablet}
                    maxDistance={20}
                    minDistance={5}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI / 2}
                />

                <HeroLights />
                <Particles count={50} />      {/* reduced from 100 */}
                <group
                    scale={isMobile ? 0.7 : 1}
                    position={[0, -3.5, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                >
                    <Room />
                </group>
            </Suspense>
        </Canvas>
    );
};

export default HeroExperience;