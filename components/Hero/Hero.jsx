import Image from 'next/image'

import styles from './Hero.module.css'

export default function Hero({ content }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles['profile-image']}>
        <Image
          src={content.profilePicture.url}
          alt='image'
          width={content.profilePicture.width}
          height={content.profilePicture.height}
        />
      </div>
      <h1>{content.heroTitle}</h1>
      <h2>{content.heroDescription}</h2>
    </div>
  )
}
