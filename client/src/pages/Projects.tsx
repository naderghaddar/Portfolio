import { FaReact, FaPython, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiTailwindcss, SiTypescript, SiCplusplus } from "react-icons/si"
import display1 from "../assets/display1.png"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built to showcase my work, skills, and experiences. Designed with a sleek aesthetic and fully responsive layout.",
    image: display1,
    tags: ["React", "TypeScript", "Tailwind", "Node.js", "CSS", "HTML"],
    github: "https://github.com/yourusername/portfolio", 
    demo: "#",
  },
  {
    title: "Chess Engine",
    description:
      "A chess engine implementing algorithms like Minimax and Alpha-Beta pruning, with a focus on search optimization and AI-driven gameplay.",
    image: "https://via.placeholder.com/600x400", 
    tags: ["Python", "C++", "Algorithms", "AI"],
    github: "https://github.com/yourusername/chess-engine",
    demo: "#",
  },
  {
    title: "NASA Space Apps Hackathon Project",
    description:
      "A collaborative hackathon project developed at NASA Space Apps. Focused on solving real-world challenges using creativity, teamwork, and technology.",
    image: "https://via.placeholder.com/600x400", 
    tags: ["JavaScript", "Python", "React", "APIs", "Data Visualization"],
    github: "https://github.com/yourusername/nasa-hackathon",
    demo: "#",
  },
]

// Helper to render icons for tech stacks
function renderIcon(tag: string) {
  switch (tag) {
    case "React":
      return <FaReact className="text-cyan-400" />
    case "Node.js":
      return <FaNodeJs className="text-green-500" />
    case "Python":
      return <FaPython className="text-yellow-400" />
    case "C++":
      return <SiCplusplus className="text-blue-400" />
    case "TypeScript":
      return <SiTypescript className="text-blue-500" />
    case "Tailwind":
      return <SiTailwindcss className="text-cyan-500" />
    case "HTML":
      return <FaHtml5 className="text-orange-500" />
    case "CSS":
      return <FaCss3Alt className="text-blue-500" />
    default:
      return null
  }
}

export default function Projects() {
  return (
    <section className="relative min-h-screen px-6 sm:px-12 md:px-16 lg:px-20 xl:px-32 py-16 md:py-24 
    bg-gradient-to-b from-black via-gray-900 to-black text-gray-300">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent)]"></div>

      {/* Section Heading */}
      <h1 className="relative text-4xl font-extrabold mb-12 text-center">
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h1>

      {/* Responsive Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 
            rounded-xl overflow-hidden hover:shadow-purple-500/20 hover:scale-105 transition duration-300"
          >
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col justify-between h-full">
              {/* Title & Description */}
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-purple-300">{p.title}</h2>
                <p className="text-gray-400 mb-4">{p.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 text-sm px-3 py-1 
                    bg-purple-500/10 text-purple-300 border border-purple-500/30 rounded-full"
                  >
                    {renderIcon(tag)} {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                  >
                    Live Demo
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm border border-purple-500 
                    text-purple-400 rounded-md hover:bg-purple-600 hover:text-white transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
