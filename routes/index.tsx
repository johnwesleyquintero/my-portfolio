import { JSX } from "preact";
import IslandShowcase from "../islands/Index.tsx";

export default function Home() {
  return (
    <div class="bg-gray-900 min-h-screen">
      <IslandShowcase />
    </div>
  );
}