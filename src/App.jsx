import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'  
import TechStack from './components/TechStack'
import Footer from './components/Footer'
import Header from './components/ui/Header'
import Learning from './components/Learning'
import Journey from './components/Journey'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <div className="mx-auto max-w-4xl px-4 py-2 md:py-4">
        <Header className="mb-6">
          <div className="flex items-center justify-between text-xs text-white">
            <span>Madrid, Spain</span>
            <span className="inline-flex items-center gap-2">
            <span className="size-2 rounded-full bg-green-500 animate-pulse" />
              Available for work
            </span>
          </div>
        </Header>
        
        <Hero />

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Education />
          <TechStack />
        </div>

        <div className="mt-6">
          <Journey />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Projects />
          <Learning />
        </div>

        <div className="mt-6">
          <Footer />
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default App
