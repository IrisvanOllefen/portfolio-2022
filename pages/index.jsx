import { request } from '../lib/datocms'
import AppLayout from '../components/AppLayout'
import Hero from '../components/Hero'

const QUERY = ` query Home {
  home {
    socialLinks {
      title
      profileLink
    }
    profilePicture {
      url
      width
      height
    }
    heroTitle
    heroDescription
  }
}
`

export async function getStaticProps() {
  const data = await request({ query: QUERY })
  return { props: { data } }
}

export default function Home({ data }) {
  return (
    <AppLayout header={data.home.socialLinks} footer={data.home.socialLinks}>
      <Hero content={data.home} />
    </AppLayout>
  )
}
