import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Portfolio.module.css'
import { Player } from '@lottiefiles/react-lottie-player'
import ieq from '../public/7ieq-site.jpg'
import cartorio from '../public/cartorio-site.jpg'
import exemplo from '../public/exemploportfolio.jpg'
import pizza from '../public/GiovanioPizza-site.jpg'
import { PortfolioCard } from '../components/PortfolioCard'
import { motion } from 'framer-motion'

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
          <a className={styles.buttonLeft} href="/">
            <div>
              <h2 className={styles.text2}>Home</h2>
            </div>
          </a>
        </motion.div>
        <div className={styles.grid}>
        <motion.a href  = "https://copy-cartorio-6em32q5lw-maycanin.vercel.app/" target="_blank"
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <PortfolioCard
              titulo="Clone UI Cartório"
              image={cartorio}
              desc="Ambiente de Treinamento"
            />
          </motion.a>
          <motion.a href  = "https://7ieq-cm.vercel.app/" target  = "_blank "
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <PortfolioCard
              titulo="7ª Igreja Quadrangular"
              image={ieq}
              desc="Ambiente de Treinamento"
            />
          </motion.a>
          <motion.a href='https://jade-gnome-8a1871.netlify.app/' target="_blank"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <PortfolioCard
              titulo="Cardápio Digital"
              image={pizza}
              desc="Ambiente de Treinamento"
            />
          </motion.a>
          <motion.a href='https://perfilportfolioexemplo.vercel.app/' target="_blank"
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
             <PortfolioCard
              titulo="Portfólio Exemplo"
              image={exemplo}
              desc="Ambiente de Treinamento"
            />
        </motion.a>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {' '}
          <a className={styles.buttonRight} href="/contato">
            <div>
              <h2 className={styles.text2}>Contato</h2>
            </div>
          </a>
        </motion.div>
      </div>
    </main>
  )
}