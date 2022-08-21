import Image from 'next/image';
import styles from './ContatoCard.module.css';

export const ContatoCard = ({ titulo, desc, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
              <h2 className={styles.tec}>{titulo}</h2>
      </div>
      <div className={styles.cardBody}>
              <Image className={styles.image} width={'50px'} height={'50px'} src={image} />
          </div>
          <div className={styles.cardFooter}>
              <h3 className={styles.text}>{desc}</h3>
          </div>
      </div>
  )
}
