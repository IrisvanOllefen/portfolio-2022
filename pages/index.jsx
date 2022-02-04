import { request } from '../lib/datocms'
import AppLayout from '../components/AppLayout'

const QUERY = ` query Home {
  home {
    title
    menuItems {
      menuItem
      slug
    }
  }
}
`

export async function getStaticProps() {
  const data = await request({ query: QUERY })
  return { props: { data } }
}

export default function Home({ data }) {
  return (
    <AppLayout header={data.home.menuItems}>
      <h1>{data.home.title}</h1>
    </AppLayout>
  )
}
