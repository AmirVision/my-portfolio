"use client";

import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useMemo } from "react";

import { withKTX2 } from "@/lib/ktx2";

const Model = ({ model }) => {
    const { gl } = useThree();

    // useGLTF(path, useDraco, useMeshopt, extendLoader)
    // The KTX2 callback needs `gl`, which is why this runs inside <Canvas>.
    const { scene } = useGLTF(model.modelPath, true, false, withKTX2(gl));

    // Memoize the cloned scene to prevent mutation issues
    const clonedScene = useMemo(() => scene.clone(), [scene]);

    return (
        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={clonedScene} />
            </group>
        </Float>
    );
};

const TechIconCardExperience = ({ model }) => {
    return (
        <Canvas
            dpr={[1, 2]} // Responsive pixel ratio
            performance={{ min: 0.5 }} // Allow frame rate adaptation
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow={false} />
            <directionalLight position={[-5, 0, -5]} intensity={0.5} castShadow={false} />

            <Suspense fallback={null}>
                <Model model={model} />
            </Suspense>

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
            />
        </Canvas>
    );
};

export default TechIconCardExperience;