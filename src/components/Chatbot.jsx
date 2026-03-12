import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPaperAirplane, HiSparkles, HiChatBubbleLeftRight } from 'react-icons/hi2'
import Section from './ui/Section'
import { GoogleGenerativeAI } from '@google/generative-ai'

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

const SYSTEM_PROMPT = `
You are an AI assistant for John Montaña's portfolio website. Your goal is to answer visitor questions about John using the following information.
Always answer in the first person (as if you are John's digital avatar).
Be friendly, professional, and concise (max 2-3 sentences unless asked for more detail).
Use emojis occasionally to be engaging.

Here is the information about John:
- **Role**: Full Stack Developer & Cybersecurity Enthusiast.
- **Location**: Madrid, Spain.
- **Background**: ${responses.about}
- **Skills**: ${responses.skills}
- **Projects**: ${responses.projects}
- **Contact**: ${responses.contact}
- **Education**: ${responses.education}
- **Cybersecurity Journey**: ${responses.cybersecurity}
- **Goals**: ${responses.goals}

If a user asks something not covered here, politely say you don't know but can tell them about John's skills, projects, or contact info.
Do not hallucinate facts.
`

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi!👋 Ask me anything about my work, skills, or journey!" }
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

  const generateAIResponse = async (userText) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY
    
    // Check if API key is missing or is the placeholder
    if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY_HERE') {
        // Fallback to local keyword matching if no API key
        const lowerText = userText.toLowerCase()
        for (const [category, keywords] of Object.entries(knowledgeBase)) {
            if (keywords.some(keyword => lowerText.includes(keyword))) {
                return responses[category] + " (Note: Real AI is disabled because the API key is missing.)"
            }
        }
        return responses.default + " (Note: Real AI is disabled because the API key is missing.)"
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey)
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
      
      const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: SYSTEM_PROMPT }],
            },
            {
                role: "model",
                parts: [{ text: "Understood! I am John's AI avatar. I'm ready to answer questions about him." }],
            },
        ],
      })

      const result = await chat.sendMessage(userText)
      const response = await result.response
      return response.text()
    } catch (error) {
      console.error("AI Error:", error)
      return "Oops! My AI brain hit a snag. Try asking me something else about John's projects or skills."
    }
  }

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input
    setInput('')
    setMessages(prev => [...prev, { type: 'user', text: userMessage }])
    setIsTyping(true)

    // Call AI
    const response = await generateAIResponse(userMessage)
    
    setMessages(prev => [...prev, { type: 'bot', text: response }])
    setIsTyping(false)
  }

  return (
    <Section id="chat-ai" className="!p-0 overflow-hidden">
      <div className="flex h-[500px] flex-col bg-zinc-900/20 relative">
        
        {/* Chat Header */}
        <div className="flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-[#212121]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <HiSparkles className="h-5 w-5" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>
            </div>
            <div>
              <h2 className="text-lg font-semibold font-['JetBrains_Mono'] tracking-tight text-white/90">Ask Me Anything</h2>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/40 scrollbar-thumb-rounded-full">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed shadow-sm ${
                  msg.type === 'user'
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-tr-none font-medium'
                    : 'bg-white/1 text-white/90 rounded-tl-none backdrop-blur-sm border border-white/5'
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
              <div className="flex items-center gap-1 rounded-2xl rounded-tl-none bg-white/5 px-4 py-3 border border-white/5">
                <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40 [animation-delay:-0.3s]"></div>
                <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40 [animation-delay:-0.15s]"></div>
                <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40"></div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-4 bg-transparent backdrop-blur-md border-t border-[#212121]">
          <div className="relative flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, skills, or contact info..."
              className="flex-1 rounded-xl bg-white/5 px-5 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all border border-white/5"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:bg-gray-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-white"
            >
              <HiPaperAirplane className="h-5 w-5 -rotate-45 translate-x-0.5 translate-y-[-1px]" />
            </button>
          </div>
        </form>

      </div>
    </Section>
  )
}

export default Chatbot
