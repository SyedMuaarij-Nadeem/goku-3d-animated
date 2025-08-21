import React, { useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'




const Scene = () => {
    let texture = useTexture("/Group2.png")

    let cylinder = useRef(null)

    useFrame((state, delta) => {
        cylinder.current.rotation.y += -(delta * 0.4);
    })

    return (
        <group rotation={[0, 1.3, 0.42]}>
            <mesh ref={cylinder} >
                <cylinderGeometry args={[1, 1, 0.8, 70, 30, true]} />
                <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}

export default Scene