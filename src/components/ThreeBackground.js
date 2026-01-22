import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const BackgroundPoints = () => {
    const pointsRef = useRef();

    // Create particles
    const particlesCount = 2000;
    const [positions] = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 40;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
        }
        return [positions];
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        pointsRef.current.rotation.y = time * 0.05;
        pointsRef.current.rotation.x = time * 0.02;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesCount}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                color="#3b82f6"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
};

const ThreeBackground = () => {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            pointerEvents: "none",
            backgroundColor: "#0f172a" // Matches --bg-dark
        }}>
            <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <BackgroundPoints />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
