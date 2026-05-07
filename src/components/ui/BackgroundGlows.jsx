import { motion } from 'framer-motion'

const BackgroundGlows = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Top Left Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-white blur-[120px]"
      />
      
      {/* Middle Right Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.02, 0.06, 0.02] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[30%] -right-[5%] h-[400px] w-[400px] rounded-full bg-white blur-[100px]"
      />

      {/* Bottom Left Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[10%] -left-[5%] h-[450px] w-[450px] rounded-full bg-white blur-[110px]"
      />

      {/* Bottom Center Subtle Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.01, 0.04, 0.01] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-white blur-[90px]"
      />
    </div>
  )
}

export default BackgroundGlows
