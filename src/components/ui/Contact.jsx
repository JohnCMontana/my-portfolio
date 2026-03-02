import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'

const Contact = ({ isOpen, onClose, email }) => {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // null, 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setLoading(false)
        setStatus('success')
        setTimeout(() => {
          onClose()
          setStatus(null)
        }, 2000)
      }, (error) => {
        setLoading(false)
        setStatus('error')
        console.error(error.text)
      })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full max-w-2xl rounded-2xl border border-[#212121] bg-bg/95 p-6 md:p-10 text-left shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-md mx-4 overflow-y-auto max-h-[90vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, type: "spring" }}
                >
                  <img src="/avatars/john-avatar.png" alt="Avatar" className="h-14 w-14 md:h-16 md:w-16 rounded-2xl object-cover border border-white/10" />
                </motion.div>
                <div>
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl font-bold text-white tracking-tight"
                  >
                    Let's work together 🚀
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-1 text-sm text-white/50"
                  >
                    {email}
                  </motion.div>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 md:static rounded-full p-2 text-white/40 hover:bg-white/5 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="user_name" className="block text-xs font-medium text-white/60 mb-2 uppercase tracking-wider">Name / Company</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    className="w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-white/30 focus:outline-none focus:ring-0 transition-all duration-300 focus:bg-white/10"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="user_email" className="block text-xs font-medium text-white/60 mb-2 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    className="w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-white/30 focus:outline-none focus:ring-0 transition-all duration-300 focus:bg-white/10"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="message" className="block text-xs font-medium text-white/60 mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  className="w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-white/30 focus:outline-none focus:ring-0 resize-none transition-all duration-300 focus:bg-white/10"
                  placeholder="Tell me about your project..."
                  required
                />
              </motion.div>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="rounded-[10px] bg-green-500/10 border border-green-500/20 p-3 text-sm text-green-400 text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="rounded-[10px] bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400 text-center"
                >
                  Failed to send message. Please try again later.
                </motion.div>
              )}

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-4 pt-4"
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 rounded-[10px] bg-white text-black px-4 py-2 text-sm font-medium shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.20)] hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-[10px] border border-white/20 px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-all duration-200"
                >
                  Cancel
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Contact
