import './index.css'
import Header from './components/Header';
import Hero from './components/Hero';
import { Footer } from './components/Footer';
import Star from './components/Star';
import Features from './components/Features';



function App() {

  return (
    <div className='flex flex-col w-full bg-white h-full md:max-w-4xl md:mx-auto my-[3.6em] px-[1em] md:px-[0]'>
      <Header />
      <Star
        className='right-[10em] mt-[1.06em]'
      />
      <Hero />
      <Features />
      <Footer />

    </div>
  )
}

export default App
