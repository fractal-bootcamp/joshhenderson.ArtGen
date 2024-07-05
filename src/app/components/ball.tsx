import { Canvas, useFrame } from "@react-three/fiber"
import { Physics, SphereProps, useBox, usePlane, useSphere } from "@react-three/cannon"
import { Mesh, Sphere } from "three"
import { RefObject, forwardRef, useState } from 'react'

type BallProps = {
    color: string;
    sphere: SphereProps
};


type Doubler<T> = (x: T) => T;

type validInput = number | string | boolean;

const doubler: Doubler<validInput> = (x) => {
    if (typeof x === 'number') {
        return x * 2;
    }
    if (typeof x === 'string') {
        return x + x;
    }
    return !x;
}

const doubleString: Doubler<string> = (x) => {
    return x + x;
}



export const Ball = forwardRef<Mesh, BallProps>((props, fwdRef) => {
    const [ref, { position }] = useSphere(() => ({ args: [0.5], type: 'Kinematic', ...props.sphere }), fwdRef)

    useFrame(({ mouse: { x, y }, viewport: { height, width } }) =>
        position.set((x * width) / 2, (y * height) / 2, 0),
    )
    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.5, 64, 64]} />
            <meshStandardMaterial color={props.color} />
        </mesh>
    )
})

Ball.displayName = "Ball"
