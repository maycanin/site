import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Player } from '@lottiefiles/react-lottie-player'
import { motion } from 'framer-motion'
import perfil from '../public/mayson.png'
import { MotionConfig } from 'framer-motion'

export default function Home() {
  return (
    <main className={styles.bg}>
      <Player
        autoplay
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_3GxFSt.json"
        style={{
          position: 'fixed',
          right: '0',
          bottom: '0',
          height: '100%',
          width: '100%',
          background: '#0a1928',
        }}
      />
      <div className={styles.container}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link  href='/contato'>
            <a className={styles.buttonLeft}>
              <h2>Contato</h2>
            </a>    
          </Link> 
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          drag
          dragConstraints={{
            top: -30,
            left: -30,
            right: 30,
            bottom: 30,
          }}
        >
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.on}>
                +on.<span className={styles.tec}>tec</span>
              </h2>
            </div>
            <div className={styles.cardBody}>
              <Image width={200} height={200} src={perfil} />
              <h3 className={styles.text}>DESENVOLVEDOR</h3>
              <h1 className={styles.text1}>Mayson Cândido Inácio</h1>
            </div>
            <div className={styles.cardFooter}>
              <Player
                src="https://lottie.host/cbb1fe74-08d8-4654-96de-35b72c6e7aae/klpQKcAhNI.json"
                background="transparent"
                speed="1"
                style={{ width: '46px', height: '46px' }}
                loop
                autoplay
              ></Player>
              <h4>Campo Mourão, PR</h4>
            </div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link  href='/portfolio'>
            <a className={styles.buttonRight}>
              <h2>Portfólio</h2>
            </a>    
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
