import { OrbitControls, useTexture } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { useState } from 'react'
import * as THREE from 'three'
import Scene from './Components/Scene'
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import './App.css'
import { motion } from 'motion/react'

const App = () => {

  const [isHovering, setIsHovering] = useState(false)

  return (

    <div className='w-full h-screen overflow-hidden relative font-[Neue_Montreal] z-30'>

      <div className="w-full pt-8 px-10" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <div>
          <div className='w-16 h-16 bg-[#EE7208] rounded-full flex items-center justify-center relative'>
            <div className='w-12 h-12 overflow-hidden rounded-full flex items-center justify-center z-40'>
              <img src="/goku-logo.png" alt="" />
            </div>

            <div
              className={`
              absolute flex items-center w-[10vw] text-[2.2vw] bg-[#EE7208] font-extrabold text-white logo
              py-1.5 rounded-tr-full rounded-br-full
              transform transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
              ${isHovering ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
              `}
              style={{ right: "-8.8vw" }}
            >
              &nbsp;&nbsp;&nbsp;Kakarot
            </div>
          </div>
        </div>

      </div>

      <Canvas
        className='z-[20] absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2'
        camera={{ fov: 30 }}
        gl={{ antialias: true }}>
        <OrbitControls />
        <ambientLight />
        <Scene />
        <EffectComposer multisampling={2}>
          <Bloom
            mipmapBlur
            intensity={4}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.2}
          />
          <ToneMapping adaptive />
        </EffectComposer>

      </Canvas>

      <div className='flex boldonse heading overflow-hidden whitespace-nowrap mt-14 absolute top-[40%] -translate-y-1/2 w-full py-10 text-white bg-[#EE7208] rounded-tl-4xl rounded-br-4xl opacity-50'>


        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 40 }}
          className="flex"
        >
          <h1 className='text-7xl   font-semibold uppercase  mr-10'>
            Goku Animation 3d -
          </h1>
          <h1 className='text-7xl   font-semibold uppercase  mr-10'>
            Goku Animation 3d -
          </h1>
          <h1 className='text-7xl   font-semibold uppercase  mr-10'>
            Goku Animation 3d -
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 40 }}
          className="flex"
        >
          <h1 className='text-7xl   font-semibold uppercase  mr-10'>
            Goku Animation 3d -
          </h1>
          <h1 className='text-7xl  font-semibold uppercase  mr-10'>
            Goku Animation 3d -
          </h1>
          <h1 className='text-7xl   font-semibold uppercase  mr-10'>
            Goku Animation 3d -
          </h1>
        </motion.div>

      </div>
      import {motion} from "framer-motion"

      // inside your App.jsx return
      <div className="absolute bottom-14 w-full pt-8 flex flex-col items-center justify-center font-[Neue_Montreal] font-light text-4xl tracking-tight leading-none">

        <motion.p
          className="text-white/50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0 }}
        >
          {"The Power Comes In Response To A Need, Not A Desire.".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.12 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          className="text-2xl mt-4 text-white/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 5.5 }}
        >
          Son Goku
        </motion.div>
      </div>


    </div>

  )
}

export default App