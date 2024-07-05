import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Ball } from './ball';


type ArtChildProps = {
    intensity: number;
    backgroundColor: string;
    color: string;
}

function ArtChild({ intensity, backgroundColor, color }: ArtChildProps) {
    return (
        <Canvas style={{ width: '75vw', height: '75vh' }}>
            <color attach="background" args={[backgroundColor]} />
            <ambientLight intensity={intensity} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Physics>
                <Ball color={color} sphere={{}} />
            </Physics>
        </Canvas>
    )
}

export default ArtChild;