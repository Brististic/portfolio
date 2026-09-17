import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
      <FeaturedProjects />
    </main>
  );
}