import React from 'react';

const skillCategories = [
  {
    name: "AI & Machine Learning",
    skills: ["PyTorch", "RAG Pipelines", "LangChain", "Vector Databases", "Scikit-Learn", "Computer Vision"]
  },
  {
    name: "Frontend & Full-Stack",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "State Management"]
  },
  {
    name: "Backend & Systems",
    skills: ["Python", "FastAPI", "Flask", "Node.js", "Git & CI/CD", "Docker Basics"]
  }
];

export default function Skills() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto border-t border-zinc-900">
      <h2 className="text-2xl font-bold text-white mb-8">Technical Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <div key={cat.name} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950/40">
            <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
              {cat.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800/80 text-zinc-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}