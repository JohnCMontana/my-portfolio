import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPaperAirplane, HiSparkles, HiChatBubbleLeftRight } from 'react-icons/hi2'
import Section from './ui/Section'

const knowledgeBase = {
  greetings: ['hi', 'hello', 'hey', 'greetings', 'hola', 'start'],
  about: ['who', 'about', 'yourself', 'background', 'intro'],
  skills: ['skill', 'tech', 'stack', 'technology', 'language', 'framework', 'tool', 'react', 'next', 'python'],
  projects: ['project', 'work', 'portfolio', 'build', 'create', 'app', 'website'],
  contact: ['contact', 'email', 'reach', 'message', 'touch', 'hire'],
  education: ['education', 'degree', 'study', 'university', 'school', 'diploma'],
  location: ['location', 'where', 'live', 'based', 'city', 'country'],
  cybersecurity: ['cyber', 'security', 'hack', 'soc', 'analyst', 'blue team', 'defend'],
  goals: ['goal', 'future', 'learning', 'plan'],
}

const responses = {
  greetings: "Hi there! 👋 I'm John's AI assistant. I can tell you about his projects, skills, background, or how to contact him. What would you like to know?",
  about: "I'm John Montaña, a Full Stack Developer based in Madrid, Spain. I specialize in building scalable web applications and am currently expanding my expertise into Cybersecurity. I love understanding how systems work—and how to secure them.",
  skills: "My tech stack includes React, Next.js, Tailwind CSS, and Node.js for web development. On the security side, I'm training with tools like Kali Linux, Wireshark, and learning about SOC operations. I'm also proficient in Python and comfortable with Linux environments.",
  projects: "I've built several projects, including 'Modern Enterprise UI' (a high-performance landing page) and 'Neon Commerce' (an e-commerce platform). I focus on clean code, performance, and user experience.",
  contact: "You can reach me via email at johnclyde.montana@gmail.com. I'm also active on LinkedIn and GitHub!",
  education: "I hold a Higher Technical Diploma in Software Development (EQF Level 5) and a Technical Diploma in IT Systems & Networks (EQF Level 4).",
  location: "I'm currently based in Madrid, Spain 🇪🇸.",
  cybersecurity: "I'm passionate about Blue Team operations! I'm currently training as a SOC Analyst, learning threat detection, incident response, and SIEM tools. I'm also working towards my AWS Certified Cloud Practitioner certification.",
  goals: "My goal for 2026 is to master Rust & WebAssembly for high-performance apps. I'm also learning German and deepening my knowledge of 3D web graphics with Three.js.",
  default: "I'm not sure about that one yet! I'm trained to answer questions about John's work, skills, and background. Try asking about 'projects', 'skills', or 'contact' info!"
}

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! 👋 I'm John's AI avatar. Ask me anything about my work, skills, or journey!" }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const findResponse = (text) => {
    const lowerText = text.toLowerCase()
    
    // Check specific keywords first
    for (const [category, keywords] of Object.entries(knowledgeBase)) {
      if (keywords.some(keyword => lowerText.includes(keyword))) {
        return responses[category]
      }
    }
    
    return responses.default
  }

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input
    setInput('')
    setMessages(prev => [...prev, { type: 'user', text: userMessage }])
    setIsTyping(true)

    // Simulate network delay/thinking time
    setTimeout(() => {
      const response = findResponse(userMessage)
      setMessages(prev => [...prev, { type: 'bot', text: response }])
      setIsTyping(false)
    }, 1000 + Math.random() * 500)
  }

  return (
    <Section id="chat-ai" title="Ask Me Anything">
      <div className="flex h-[400px] flex-col bg-bg/50 backdrop-blur-md rounded-2xl overflow-hidden relative">
        
        {/* Chat Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20">
                <HiSparkles className="h-4 w-4 text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
              </span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">John AI</h3>
              <p className="text-[10px] text-white/50">Always online</p>
            </div>
          </div>
          <div className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-white/40">
            Beta v1.0
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                  msg.type === 'user'
                    ? 'bg-blue-600/80 backdrop-blur-sm text-white rounded-tr-none'
                    : 'bg-white/5 text-white/90 rounded-tl-none backdrop-blur-sm'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="flex items-center gap-1 rounded-2xl rounded-tl-none bg-white/5 px-4 py-3">
                <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40 [animation-delay:-0.3s]"></div>
                <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40 [animation-delay:-0.15s]"></div>
                <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40"></div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-3 backdrop-blur-md">
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, skills, or contact info..."
              className="flex-1 rounded-xl bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/80 text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-blue-600/80"
            >
              <HiPaperAirplane className="h-4 w-4 -rotate-45 translate-x-0.5 translate-y-[-1px]" />
            </button>
          </div>
        </form>

      </div>
    </Section>
  )
}

export default Chatbot
