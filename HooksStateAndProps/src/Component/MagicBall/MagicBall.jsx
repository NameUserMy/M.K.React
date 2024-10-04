import { Canvas } from "@react-three/fiber";
import Model4 from '../../../public/Ball8v3'
import { Environment, OrbitControls} from "@react-three/drei";
import { Physics, usePlane } from '@react-three/cannon';
import { Suspense } from "react";
import './magicBall.css'

function Plane33(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position:[0,-1,0] }))
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
    </mesh>
  )
}

const MagicBall = () => {


  return (
    <div id="magic-ball">

  
    <Suspense>
    <Canvas camera={{ position: [1.5, 1.2, 0] }}>
   
        <Physics>
          <mesh>
            
            <Model4 />
            {/* <Plane33 /> */}
          </mesh>
        </Physics>
     
      <OrbitControls />
    </Canvas>
    </Suspense>
    </div>
  )
}


export default MagicBall













