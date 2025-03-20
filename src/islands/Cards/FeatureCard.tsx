import { JSX } from "preact";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div class="p-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
      <div class="text-white flex flex-col items-center text-center">
        <div class="p-4 bg-white/10 rounded-full mb-6 transition-colors duration-300 group-hover:bg-white/20">
          {icon}
        </div>
        <h3 class="text-2xl font-bold mb-3">{title}</h3>
        <p class="text-blue-100 leading-relaxed">{description}</p>
        <button class="mt-6 px-6 py-2 bg-white text-blue-600 rounded-full font-semibold transition-transform duration-200 hover:scale-110">
          Learn More
        </button>
      </div>
    </div>
  );
}