"use client";

import { useMemo, useEffect } from "react";
import { Center, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Mars({ castShadow = true, ...props }) {
    const { scene, materials } = useGLTF("/models/mars-optimized3-compressed.glb");
    const matcapTexture = useTexture("/images/textures/mat1.png");

    const model = useMemo(() => scene.clone(true), [scene]);

    const normalizedScale = useMemo(() => {
        const TARGET_SIZE = 11;
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        return TARGET_SIZE / maxDim;
    }, [model]);

    const custom = useMemo(() => {
        if (matcapTexture) matcapTexture.colorSpace = THREE.SRGBColorSpace;
        return {
            curtain: new THREE.MeshPhongMaterial({ color: "#d90429" }),
            body: new THREE.MeshPhongMaterial({ map: matcapTexture }),
            table: new THREE.MeshPhongMaterial({ color: "#582f0e" }),
            radiator: new THREE.MeshPhongMaterial({ color: "#ffffff" }),
            comp: new THREE.MeshStandardMaterial({ color: "#ffffff" }),
            pillow: new THREE.MeshPhongMaterial({ color: "#8338ec" }),
            chair: new THREE.MeshPhongMaterial({ color: "#000000" }),
        };
    }, [matcapTexture]);

    const screenMaterial = useMemo(() => {
        const src = materials.lambert1;
        if (!src) {
            return new THREE.MeshBasicMaterial({ color: "#7df9ff", toneMapped: false });
        }
        const mat = src.clone();
        mat.toneMapped = false;
        if (mat.map) {
            mat.emissive = new THREE.Color("#ffffff");
            mat.emissiveMap = mat.map;
            mat.emissiveIntensity = 1.5;
        } else {
            mat.emissive = new THREE.Color("#7df9ff");
            mat.emissiveIntensity = 2;
        }
        return mat;
    }, [materials.lambert1]);

    useEffect(() => {
        model.traverse((o) => {
            if (!o.isMesh) return;
            o.castShadow = castShadow;
            o.receiveShadow = castShadow;

            const name = o.name.toLowerCase();
            if (name.includes("emis")) o.material = screenMaterial;
            else if (name.includes("body1") || name === "body") o.material = custom.body;
            else if (name.includes("cabin")) o.material = custom.table;
            else if (name.includes("chair")) o.material = custom.chair;
            else if (name.includes("comp")) o.material = custom.comp;
            else if (name.includes("pillow")) o.material = custom.pillow;
            else if (name.includes("table")) o.material = custom.table;
            else if (name.includes("radiator")) o.material = custom.radiator;
            else if (name.includes("curtain")) o.material = custom.curtain;
        });
    }, [model, custom, screenMaterial, castShadow]);

    useEffect(() => {
        return () => {
            Object.values(custom).forEach((m) => m.dispose());
            screenMaterial.dispose();
        };
    }, [custom, screenMaterial]);

    return (
        <group {...props} dispose={null}>
            <Center>
                <primitive object={model} scale={normalizedScale} />
            </Center>
        </group>
    );
}

useGLTF.preload("/models/mars-optimized3-compressed.glb");