import Image from 'next/image'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Header from './components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Main />
    </div>  )
}
