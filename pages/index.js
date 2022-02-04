import { request } from '../lib/datocms'
const QUERY = `query MyQuery {
  home {
    title
  }
}
`
export async function getStaticProps() {
  const data = await request({
    query: QUERY,
  })
  return {
    props: { data },
  }
}
export default function Home({ data }) {
  return (
    <div>
      <h1>{data.home.title}</h1>
    </div>
  )
}
