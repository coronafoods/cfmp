import '../styles/global.css'
import { Montserrat } from 'next/font/google'

const monts = Montserrat({
    // weight: '400',
    subsets: ['latin']
  })


export default function App({ Component, pageProps }) {
  return (
      <main className={monts.className}>
        <Component {...pageProps} />
      </main>
    
  )
}
