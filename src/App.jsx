import {Navbar} from '@/layout/Navbar'
import {Hero} from '@/sections/Hero'
import {Projects} from '@/sections/Projects'
import {Experience} from '@/sections/Experience'
import {About} from '@/sections/About'
import {Contact} from '@/sections/Contact'
import {Testimonials} from '@/sections/Testimonials'

function App() {

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}

export default App
