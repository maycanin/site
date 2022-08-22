import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Contato.module.css'
import { Player } from '@lottiefiles/react-lottie-player'
import { motion } from 'framer-motion'
import { ContatoCard } from '../components/ContatoCard'
import whatsapp from '../public/whatsapp.png'
import gmail from '../public/gmail.png'
import telefone from '../public/telefone.png'
import facebook from '../public/facebook.png'
import telegram from '../public/telegram.png'
import discord from '../public/discordia.png'

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
          <Link href="/">
            <a className={styles.buttonLeft}>
              <h2>Home</h2>
            </a>
          </Link>
        </motion.div>
        <div className={styles.container1}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.01 }}
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
                <h2>
                  +on.<span className={styles.tec}>tec</span>
                </h2>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.text}>
                  Entre em contato agora mesmo e saiba mais sobre produtos e
                  serviçoes oferecidos por +on.tec serviços digitais
                </h3>
                <h1 className={styles.text1}>Fale conosco</h1>
                <div className={styles.grid}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ContatoCard image={telefone} desc="Telefone" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ContatoCard image={whatsapp} desc="Whatsapp" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ContatoCard image={gmail} desc="Email" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {' '}
                    <ContatoCard image={facebook} desc="Facebook" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.01 }}
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
                  Equipe +on.<span className={styles.tec}>tec</span>
                </h2>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.text}>
                  Entre em contato a nossa equipe de suporte e desenvolvimento
                  do +on.tec serviços digitais
                </h3>
                <h1 className={styles.text1}>Fale com a equipe</h1>
                <div className={styles.grid}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ContatoCard image={telegram} desc="Telegram" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ContatoCard image={whatsapp} desc="Whatsapp" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ContatoCard image={gmail} desc="Email" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ContatoCard image={discord} desc="Discord" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/portfolio">
            <a className={styles.buttonRight}>
              <h2>Portfólio</h2>
            </a>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
