import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import { BakeShadows, OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      position-x={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarNagle={Math.PI / 2}
        />
        <Earth/>
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas
