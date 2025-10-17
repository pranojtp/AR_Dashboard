
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Shaders
const vertexShader = `
    attribute float scale;

    void main() {
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
        gl_PointSize = scale * ( 300.0 / - mvPosition.z );
        gl_Position = projectionMatrix * mvPosition;
    }
`;

const fragmentShader = `
    uniform vec3 color;

    void main() {
        if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
        gl_FragColor = vec4( color, 1.0 );
    }
`;

// Constants for particle grid layout
const SEPARATION = 100;
const AMOUNTX = 50;
const AMOUNTY = 50;

const ThreeParticles: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const particlesRef = useRef<THREE.Points | null>(null);
    const countRef = useRef(0);
    const mouseXRef = useRef(0);
    const mouseYRef = useRef(0);
    const windowHalfXRef = useRef(0);
    const windowHalfYRef = useRef(0);

    useEffect(() => {
        if (!containerRef.current) return;

        windowHalfXRef.current = window.innerWidth / 2;
        windowHalfYRef.current = window.innerHeight / 2;

        // Scene setup
        cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        cameraRef.current.position.set(0, 500, 1000); // Position above the particles
        cameraRef.current.rotation.x = -Math.PI / 6; // Tilt the camera downwards at a 30-degree angle

        sceneRef.current = new THREE.Scene();

        const numParticles = AMOUNTX * AMOUNTY;
        const positions = new Float32Array(numParticles * 3);
        const scales = new Float32Array(numParticles);

        let i = 0;
        let j = 0;

        // Generate particle positions and scales
        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2; // x
                positions[i + 1] = 0; // y
                positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2; // z
                scales[j] = 1;
                i += 3;
                j++;
            }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

        const material = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Color(0xAAAAAA) },
            },
            vertexShader,
            fragmentShader,
        });

        particlesRef.current = new THREE.Points(geometry, material);
        sceneRef.current.add(particlesRef.current);

        rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
        rendererRef.current.setPixelRatio(window.devicePixelRatio);
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(rendererRef.current.domElement);

        // Event listeners
        const onMouseMove = (event: MouseEvent) => {
            mouseXRef.current = event.clientX - windowHalfXRef.current;
            mouseYRef.current = event.clientY - windowHalfYRef.current;
        };
        const onWindowResize = () => {
            windowHalfXRef.current = window.innerWidth / 2;
            windowHalfYRef.current = window.innerHeight / 2;

            if (cameraRef.current) {
                cameraRef.current.aspect = window.innerWidth / window.innerHeight;
                cameraRef.current.updateProjectionMatrix();
            }

            rendererRef.current?.setSize(window.innerWidth, window.innerHeight);
        };

        document.addEventListener('mousemove', onMouseMove, false);
        window.addEventListener('resize', onWindowResize);

        // Copy the ref value to a variable
        const container = containerRef.current;

        // Cleanup function
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onWindowResize);
            if (rendererRef.current && container) {
                container.removeChild(rendererRef.current.domElement);
            }
        };
    }, []);

    useEffect(() => {
        const animate = () => {
            render();
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    // Animation loop
    const render = () => {
        if (!cameraRef.current || !sceneRef.current || !particlesRef.current || !rendererRef.current) return;

        cameraRef.current.position.x += (mouseXRef.current - cameraRef.current.position.x) * 0.05;
        cameraRef.current.position.y += (-mouseYRef.current - cameraRef.current.position.y) * 0.01; // Tilt the camera downwards y-axis
        cameraRef.current.lookAt(sceneRef.current.position);

        const positions = particlesRef.current.geometry.attributes.position.array;
        const scales = particlesRef.current.geometry.attributes.scale.array;

        let i = 0;
        let j = 0;

        //Change code here to adjust wave and particle size
        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                positions[i + 1] = Math.sin((ix + countRef.current) * 0.3) * 20 + Math.sin((iy + countRef.current) * 0.5) * 20;
                scales[j] = (Math.sin((ix + countRef.current) * 0.3) + 1) * 10 + (Math.sin((iy + countRef.current) * 0.5) + 1) * 10;
                i += 3;
                j++;
            }
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
        particlesRef.current.geometry.attributes.scale.needsUpdate = true;

        rendererRef.current.render(sceneRef.current, cameraRef.current);

        countRef.current += 0.01;
    };

    return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ThreeParticles;
