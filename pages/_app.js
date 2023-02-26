import Footer from '../components/Footer'
import Link from 'next/link'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return <>
  <NavBar /><Component {...pageProps} /><Footer />
  </>
}

export default MyApp
