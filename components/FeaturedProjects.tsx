import React from 'react';
import { ExternalLink, Layers, Brain, Search, Activity } from 'lucide-react';

function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const projects = [
  {
    title: "Clinical-3D-MRI-Pathology",
    tagline: "Volumetric Deep Learning Pipeline for 3D Medical Imaging Diagnostics",
    description: "End-to-end 3D convolutional neural network handling volumetric MRI tensors. Implements voxel normalization, 3D affine data augmentations, and thresholded segmentation masking to overcome traditional 2D slice information loss.",
    tags: ["PyTorch", "3D Vision", "TorchIO / MONAI", "Python"],
    icon: Brain,
    github: "https://github.com/Brististic/Clinical-3D-MRI-Pathology",
    demo: "#"
  },
  {
    title: "AI-Powered-Election-Assistant",
    tagline: "Grounded Civic Intelligence Engine with Retrieval-Augmented Generation",
    description: "Contextual RAG pipeline indexing civic charters and legislative documents using dense vector embeddings. Features similarity thresholding and metadata filtering to ensure factual, hallucination-free answers with verifiable citations.",
    tags: ["LangChain", "ChromaDB", "FastAPI", "React", "RAG"],
    icon: Layers,
    github: "https://github.com/Brististic/AI-Powered-Election-Assistant",
    demo: "#"
  },
  {
    title: "ai-search-app",
    tagline: "Low-Latency Semantic Search & Vector Retrieval Interface",
    description: "High-performance semantic retrieval system translating natural queries into dense vector embeddings for real-time cosine similarity search, outperforming keyword search in conceptual relevance.",
    tags: ["Sentence-Transformers", "Vector Search", "Next.js", "FastAPI"],
    icon: Search,
    github: "https://github.com/Brististic/ai-search-app",
    demo: "#"
  },
  {
    title: "Multi-disease-prediction-system",
    tagline: "Multi-Parametric Clinical Diagnostic & Risk Assessment Platform",
    description: "Diagnostic suite running multiple supervised machine learning models to analyze patient clinical biomarkers and produce real-time probabilistic risk assessments tuned to minimize false negatives.",
    tags: ["Scikit-Learn", "Predictive ML", "Python", "Flask / Streamlit"],
    icon: Activity,
    github: "https://github.com/Brististic/Multi-disease-prediction-system",
    demo: "#"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Featured Engineering
        </h2>
        <p className="mt-2 text-zinc-400">
          Selected work across deep learning, retrieval systems, and full-stack AI engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <div
              key={project.title}
              className="flex flex-col justify-between p-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400">
                    <Icon size={22} />
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={18} />
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
                <p className="text-xs font-medium text-emerald-400 mt-1 mb-3">{project.tagline}</p>
                <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-zinc-900">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}