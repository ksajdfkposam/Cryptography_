import React from 'react'
import { Canvas } from "@react-three/fiber"
import { useGLTF, PresentationControls, Stage } from "@react-three/drei"


function OurModel(props){
    const {scene} = useGLTF('./bitcoin.glb')
    return <primitive object={scene} {...props} /> 
}

const Model = () => {
  return (
    <div style={{position:"absolute",top:"10%",width:"100%",height:"60vh"}}>
           <Canvas dpr={[1,2]} shadows camera={{fov: 45}}  >
        
        <color attach="background" args={['#101010']} /> 
        <ambientLight intensity={-1}  />
  
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]} >
          <Stage environment={null} >
          <OurModel scale={0.01} /> 
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  )
}

export default Model
