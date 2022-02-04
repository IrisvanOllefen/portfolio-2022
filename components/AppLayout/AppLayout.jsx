import Head from 'next/head'

import AppHeader from '../AppHeader'
import AppFooter from '../AppFooter'

export default function AppLayout({ header, children }) {
  return (
    <>
      <Head>
        <title>Portfolio by Iris van Ollefen</title>
        <meta
          name='description'
          content='The portfolio of Iris van Ollefen, Front-end Developer with a background in UX Design.'
        />
      </Head>
      <AppHeader content={header} />
      <main>{children}</main>
      <AppFooter />
    </>
  )
}
