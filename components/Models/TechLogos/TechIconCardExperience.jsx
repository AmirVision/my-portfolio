"use client"

import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, Suspense } from "react";
import * as THREE from "three";

const Model = ({ model }) => {
    const getModelUrl = (path) => {
        if (typeof window !== 'undefined') {
            return new URL(path, window.location.origin).href;
        }
        return path;
    };

    const scene = useGLTF(getModelUrl(model.modelPath));

    useEffect(() => {
        if (model.name === "Interactive Developer") {
            scene.scene.traverse((child) => {
                if (child.isMesh) {
                    if (child.name === "Object_5") {
                        child.material = new THREE.MeshStandardMaterial({ color: "white" });
                    }
                }
            });
        }
    }, [scene, model.name]);

    return (
        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene} />
            </group>
        </Float>
    );
};

const TechIconCardExperience = ({ model }) => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <directionalLight position={[-5, 0, -5]} intensity={0.5} />
            <spotLight
                position={[10, 15, 10]}
                angle={0.3}
                penumbra={1}
                intensity={2}
            />

            <Suspense fallback={null}>
                <Model model={model} />
            </Suspense>

            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};

export default TechIconCardExperience;