import { JSX } from "preact";
import FeatureCard from "./Cards/FeatureCard";
import { motion } from "framer-motion";

export default function IslandShowcase() {
  const features = [
    {
      title: "Interactive Design",
      description: "Beautifully animated components with smooth transitions",
      icon: <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    },
    {
      title: "Responsive Layout",
      description: "Perfectly adapted for all screen sizes and devices",
      icon: <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
    },
    {
      title: "Modern Effects",
      description: "Gradients, shadows and hover states that pop",
      icon: <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    }
  ];

  return (
    <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        class="max-w-6xl mx-auto text-center mb-16"
      >
        <h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 mb-6">
          Stellar Components
        </h1>
        <p class="text-gray-300 text-lg mb-8">
          Discover our collection of beautifully crafted interactive elements
        </p>
      </motion.div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}