"use client"

import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";

const Model = ({ model }) => {
    // Preload model
    const { scene } = useGLTF(model.modelPath);

    // Memoize the cloned scene to prevent mutation issues
    const clonedScene = useMemo(() => scene.clone(), [scene]);

    return (
        <Float
            speed={5.5}
            rotationIntensity={0.5}
            floatIntensity={0.9}
        >
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={clonedScene} />
            </group>
        </Float>
    );
};

// Preload outside component to avoid re-renders
const TechIconCardExperience = ({ model }) => {
    // Set decoder path and preload model only once
    useMemo(() => {
        useGLTF.setDecoderPath('/draco/');
        useGLTF.preload(model.modelPath);
    }, [model.modelPath]);

    return (
        <Canvas
            // Performance optimizations
            dpr={[1, 2]} // Responsive pixel ratio
            performance={{ min: 0.5 }} // Allow frame rate adaptation
        >
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[5, 5, 5]}
                intensity={1.5}
                castShadow={false} // Disable shadows unless needed
            />
            <directionalLight
                position={[-5, 0, -5]}
                intensity={0.5}
                castShadow={false}
            />

            <Suspense fallback={null}>
                <Model model={model} />
            </Suspense>

            <OrbitControls
                enableZoom={false}
                enablePan={false} // Prevent unwanted panning
                minPolarAngle={Math.PI / 2} // Restrict to horizontal rotation only
                maxPolarAngle={Math.PI / 2}
            />
        </Canvas>
    );
};

export default TechIconCardExperience;