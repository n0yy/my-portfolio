import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <main className='bg-dark overflow-hidden'>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
