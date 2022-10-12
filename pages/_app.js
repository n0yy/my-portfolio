import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <main className='bg-dark'>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
