import Hero from './components/Hero'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Projects from './components/Projects'  
import TechStack from './components/TechStack'
import Footer from './components/Footer'
import Header from './components/ui/Header'
import Learning from './components/Learning'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import BackgroundGlows from './components/ui/BackgroundGlows'

function App() {
  return (
    <div className="min-h-screen bg-bg text-white pb-24 relative">
      <BackgroundGlows />
      <div className="mx-auto max-w-4xl px-3 md:px-4 py-2 md:py-4">
        <Header className="mb-6" title="Location & Status" hideTitle={true}>
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
          <div className="flex flex-col gap-6">
            <Skills />
            <TechStack />
          </div>
          <Certifications />
        </div>

        <div className="mt-6">
          <Experience />
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
