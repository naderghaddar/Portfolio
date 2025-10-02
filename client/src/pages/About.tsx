import nba from "../assets/nba.jpg"
import pepe from "../assets/pepe.png"
import muaythai from "../assets/muaythai.webp"

export default function About() {
  return (
    <section className="min-h-screen w-full px-6 sm:px-12 md:px-24 py-24 bg-gradient-to-b from-black via-gray-900 to-black text-gray-300">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          About <span className="text-purple-400">Me</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-400">
          A little story about my background, studies, and passions.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Text section FIRST */}
        <div className="space-y-10 text-lg leading-relaxed">
          <p>
            I’m a passionate computer science student with a strong interest in automation,
            algorithms, AI, and problem-solving optimization. 
            My journey began
            in childhood when I developed a fascination with technology—it started with playing video games and
            often spending hours experimenting with computers and learning
            how things work under the hood.
          </p>
          <p>
            Beyond academics, I’ve always lived an active lifestyle. 
            I grew up swimming as a kid and playing basketball in high school before moving on to weight lifting and martial arts, 
            which gave me a strong foundation in discipline and resilience. 
          </p>
          <p>
            Over time, I developed a strong passion for Muay Thai, 
            where I’ve challenged myself beyond training and into competition, which continues to sharpen not only my physical 
            strength but also my mental focus, perseverance, and discipline.
          </p>
          <p>
            Today, my focus lies in building clean, scalable solutions
            that merge creativity with functionality, while constantly
            learning and exploring new technologies that push the boundaries
            of what’s possible.
          </p>
        </div>

        {/* Images section SECOND */}
        <div className="grid grid-cols-2 gap-4">
          {/* Make first image smaller */}
          <img
            src={muaythai}
            alt="Muay Thai"
            className="col-span-2 h-[400px] w-[400px] object-cover rounded-2xl border-2 border-purple-500 shadow-lg hover:scale-105 transition"
          />
          <img
            src={pepe}
            alt="Childhood"
            className="rounded-xl border border-purple-400/50 shadow hover:scale-105 transition"
          />
          <img
            src={nba}
            alt="Basketball"
            className="rounded-xl border border-purple-400/50 shadow hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  )
}
