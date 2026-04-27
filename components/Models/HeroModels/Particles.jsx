"use client"

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 50 }) => {
    const mesh = useRef();

    // Pre‑compute initial positions **outside** the component body
    const { positions, speeds } = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const spd = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = Math.random() * 10 + 5;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
            spd[i] = 0.005 + Math.random() * 0.001;
        }
        return { positions: pos, speeds: spd };
    }, [count]);

    useFrame(() => {
        const posArray = mesh.current.geometry.attributes.position.array;
        for (let i = 0; i < count; i++) {
            let y = posArray[i * 3 + 1];
            y -= speeds[i];
            if (y < -2) y = Math.random() * 10 + 5;
            posArray[i * 3 + 1] = y;
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#ffffff"
                size={0.05}
                transparent
                opacity={0.9}
                depthWrite={false}
            />
        </points>
    );
};

export default Particles;