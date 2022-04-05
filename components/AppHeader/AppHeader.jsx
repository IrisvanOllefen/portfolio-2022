import Link from 'next/link'
import Image from 'next/image'

import styles from './AppHeader.module.css'

export default function AppHeader({ content }) {
  console.log(content)
  return (
    <div className={styles.wrapper}>
      <Link href='/'>
        <a>
          <Image
            src='/images/white-logo.svg'
            alt='logo'
            width={70}
            height={90}
          />
        </a>
      </Link>
      <ul className={styles['social-wrapper']}>
        {content.map((link) => {
          return (
            <li key={link.title}>
              <Link href={`${link.profileLink}`}>
                <a className={styles['social-media-icon']}>
                  <Image
                    src={`/assets/${link.title}.svg`}
                    alt={link.title}
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
