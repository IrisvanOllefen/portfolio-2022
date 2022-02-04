import Link from 'next/link'
import Image from 'next/image'

import styles from './AppHeader.module.css'

export default function AppHeader({ content }) {
  return (
    <ul className={styles.wrapper}>
      <li>
        <Link href='/'>
          <a>
            <Image src='/logo-white.png' alt='logo' width={45} height={70} />
          </a>
        </Link>
      </li>
      {content.map((item) => {
        return (
          <li key={item.menuItem} className={styles.item}>
            <Link href={`/${item.slug}`}>
              <a>{item.menuItem}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
