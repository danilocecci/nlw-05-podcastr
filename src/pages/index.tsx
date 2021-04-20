// SPA - React
// SSR - React + Gatsby/Next
// SSG - React + Next

export default function Home(props) {
  console.log(props.episodes)
  return (
    <h1>Index</h1>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  
  return {
    props: {
      episodes: data,
    },
    //de quanto e quanto tempo o server vai gerar uma página estática
    revalidate: 60 * 60 * 8,
  }
}