"use client";

import { Suspense, useRef, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMediaQuery } from "react-responsive";

import { Mars } from "./Mars";

const Fallback = () => (
    <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#111" wireframe />
    </mesh>
);

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    // Heavy GPU features only on capable screens.
    const enableShadows = !isMobile;
    const enablePostFX = !isMobile && !isTablet;

    const [autoRotate, setAutoRotate] = useState(true);
    const idleTimer = useRef(null);

    const handleStart = useCallback(() => {
        setAutoRotate(false);
        if (idleTimer.current) clearTimeout(idleTimer.current);
    }, []);

    const handleEnd = useCallback(() => {
        if (idleTimer.current) clearTimeout(idleTimer.current);
        idleTimer.current = setTimeout(() => setAutoRotate(true), 2000);
    }, []);

    return (
        <Canvas
            shadows={enableShadows}
            camera={{ position: [0, 0, 15], fov: 45 }}
            // Capping DPR at 1.5 on mobile roughly halves the pixels to shade
            // vs. 2x, which is the cheapest big win on a phone GPU.
            dpr={isMobile ? [1, 1.5] : [1, 2]}
            performance={{ min: 0.5 }}
            gl={{
                powerPreference: "high-performance",
                antialias: !isMobile,
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
                    autoRotate={autoRotate}
                    autoRotateSpeed={1.3}
                    onStart={handleStart}
                    onEnd={handleEnd}
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
                    castShadow={enableShadows}
                    shadow-mapSize={[1024, 1024]}
                    shadow-bias={-0.0004}
                />

                <directionalLight position={[-6, 4, -4]} intensity={0.6} color="#6aa3ff" />

                {/* Accent point lights are nice-to-have; skip them on phones. */}
                {!isMobile && (
                    <>
                        <pointLight position={[-3.5, 2, 3]} intensity={30} distance={14} decay={2} color="#d90429" />
                        <pointLight position={[3.5, 1.5, -2]} intensity={22} distance={12} decay={2} color="#8338ec" />
                    </>
                )}

                <group
                    scale={isMobile ? 0.55 : 1}
                    position={[0, -1, 0]}
                    rotation={[0, Math.PI / 4, 0]}
                >
                    <Mars castShadow={enableShadows} />
                </group>

                {enablePostFX && (
                    <EffectComposer>
                        <Bloom
                            mipmapBlur
                            intensity={1.2}
                            luminanceThreshold={0.6}
                            luminanceSmoothing={0.9}
                        />
                    </EffectComposer>
                )}
            </Suspense>
        </Canvas>
    );
};

export default HeroExperience;