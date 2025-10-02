import { FaLinkedin, FaGithub, FaEnvelope, FaLaptopCode, FaBriefcase } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-24 pt-32 text-center bg-gradient-to-b from-gray-900 via-black to-gray-900">


      {/* Profile Image */}
      <div className="mb-6 relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur opacity-60 animate-pulse"></div>
        <img
          src={profilePic}
          alt="Profile"
          className="relative w-36 h-36 rounded-full border-4 border-purple-500 shadow-lg shadow-purple-900/50 object-cover"
        />
      </div>

      {/* Name + Intro */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
        Hi, I’m <span className="text-purple-400">Nader</span>
      </h1>
      <p className="max-w-2xl text-gray-300 text-lg leading-relaxed mb-6">
        I’m a Computer Science student at <span className="font-semibold">Université de Montréal</span> with hands-on experience in 
        <span className="text-purple-300"> Python, Java, SQL, C#, and full-stack web development</span>. 
        At the core, I’m a problem-solver who enjoys turning challenges into opportunities, 
        and crafting clean, scalable solutions that make technology more efficient.
      </p>

      {/* Social Links */}
      <div className="flex space-x-6 mb-8 text-2xl">
        <a href="https://www.linkedin.com/in/nader-ghaddar/" target="_blank" rel="noopener noreferrer"
          className="text-gray-300 hover:text-purple-400 transition">
          <FaLinkedin />
        </a>
        <a href="https://github.com/naderghaddar" target="_blank" rel="noopener noreferrer"
          className="text-gray-300 hover:text-purple-400 transition">
          <FaGithub />
        </a>
        <a href="mailto:naderghaddar03@gmail.com" className="text-gray-300 hover:text-purple-400 transition">
          <FaEnvelope />
        </a>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-6 mb-24">
        <a href="/projects"
          className="px-6 py-3 border border-purple-500 text-white font-medium rounded-lg hover:bg-purple-800 hover:text-white transition">
          View Projects
        </a>
        <a href="/contact"
          className="px-6 py-3 border border-purple-500 text-white font-medium rounded-lg hover:bg-purple-800 hover:text-white transition">
          Contact Me
        </a>
      </div>

      {/* ===== SKILLS SECTION ===== */}
      <div className="w-full py-16 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-3xl font-bold text-purple-400 flex items-center justify-center mb-10">
          <FaLaptopCode className="mr-3" /> Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-800/60 border border-purple-500 rounded-lg p-6 shadow hover:shadow-purple-500/30 transition">
            <p className="text-white font-semibold">Python</p>
          </div>
          <div className="bg-gray-800/60 border border-purple-500 rounded-lg p-6 shadow hover:shadow-purple-500/30 transition">
            <p className="text-white font-semibold">Java</p>
          </div>
          <div className="bg-gray-800/60 border border-purple-500 rounded-lg p-6 shadow hover:shadow-purple-500/30 transition">
            <p className="text-white font-semibold">SQL</p>
          </div>
          <div className="bg-gray-800/60 border border-purple-500 rounded-lg p-6 shadow hover:shadow-purple-500/30 transition">
            <p className="text-white font-semibold">JavaScript</p>
          </div>
          <div className="bg-gray-800/60 border border-purple-500 rounded-lg p-6 shadow hover:shadow-purple-500/30 transition">
            <p className="text-white font-semibold">C#</p>
          </div>
          <div className="bg-gray-800/60 border border-purple-500 rounded-lg p-6 shadow hover:shadow-purple-500/30 transition">
            <p className="text-white font-semibold">React</p>
          </div>
          <div className="bg-gray-800/60 border border-purple-500 rounded-lg p-6 shadow hover:shadow-purple-500/30 transition">
            <p className="text-white font-semibold">Node.js</p>
          </div>
          <div className="bg-gray-800/60 border border-purple-500 rounded-lg p-6 shadow hover:shadow-purple-500/30 transition">
            <p className="text-white font-semibold">Git</p>
          </div>
          </div>
        </div>
      
      {/* ===== EXPERIENCE SECTION ===== */}
<div className="w-full py-16 bg-gradient-to-b from-gray-900 to-black">
  <h2 className="text-3xl font-bold text-purple-400 flex items-center justify-center mb-10">
    <FaBriefcase className="mr-3" /> Experience
  </h2>
  
  <div className="max-w-3xl mx-auto space-y-8">
    
    {/* Internship Card */}
    <div className="bg-gray-800/60 border-l-4 border-purple-500 p-6 rounded-md shadow">
      <h3 className="text-2xl font-semibold text-white">Software Development Intern</h3>
      <p className="text-purple-300 mb-4">Planbox Inc. | 2023-2024</p>
      
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Contributed to software <span className="text-purple-400">Quality Assurance</span> by ensuring reliability of client-facing platforms through extensive GUI and database testing.</li>
        <li>Improved data security and compliance by developing <span className="text-purple-400">SQL</span> and shell scripts to sanitize client databases and automate modifications via Azure.</li>
        <li>Increased user engagement by creating an Avatar Mode feature, enabling <span className="text-purple-400">1,000+ admins and end-users</span> to interact with software anonymously using HTML, CSS, JavaScript, C#, and SQL.</li>
        <li>Leveraged applied AI by building a Python script with <span className="text-purple-400">DALL·E</span> that generated <span className="text-purple-400">10,000+ accurate images</span>, enhancing product resources.</li>
        <li>Collaborated effectively with teams using <span className="text-purple-400">Git</span> for version control and <span className="text-purple-400">Jira</span> for agile task management, contributing to bug fixes and production patches.</li>
      </ul>
    </div>

    
  </div>
</div>

    </section>
  );
}
