import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
      <Hero />
      <FeaturedProjects />
      <Skills />
    </main>
  );
}