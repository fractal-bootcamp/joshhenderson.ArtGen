import { Canvas, useFrame } from "@react-three/fiber"
import { Physics, SphereProps, useBox, usePlane, useSphere } from "@react-three/cannon"
import { Mesh, Sphere } from "three"
import { RefObject, forwardRef } from 'react'

const Ball = forwardRef<Mesh, SphereProps>((props, fwdRef) => {
  const [ref, { position }] = useSphere(() => ({ args: [0.5], type: 'Kinematic', ...props }), fwdRef)

  useFrame(({ mouse: { x, y }, viewport: { height, width } }) =>
    position.set((x * width) / 2, (y * height) / 2, 0),
  )
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshNormalMaterial />
    </mesh>
  )
})



export default function ArtDisplay() {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Physics>
        <Ball />
      </Physics>
    </Canvas>
  )
}