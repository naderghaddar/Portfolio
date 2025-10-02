import { useRef, useState } from "react"
import emailjs from "emailjs-com"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)

    emailjs
      .sendForm(
        "service_3z7rkxa",   // replace with your EmailJS service ID
        "template_vxry8dh",  // replace with your EmailJS template ID
        formRef.current!,
        "_IP6-g3nVaZkQ8EXN"    // replace with your EmailJS public key
      )
      .then(
        () => {
          setLoading(false)
          setSuccess("Message sent successfully! ✅")
          if (formRef.current) formRef.current.reset()
        },
        (error) => {
          setLoading(false)
          setSuccess("Something went wrong ❌. Please try again.")
          console.error(error)
        }
      )
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 md:px-24 lg:px-40 py-16 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black text-gray-300">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent)]"></div>

      {/* Heading */}
      <div className="relative text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Get in <span className="text-purple-400">Touch</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg text-gray-400">
          Have a question, project idea, or just want to say hi? Drop me a
          message below and I’ll get back to you soon.
        </p>
      </div>

      {/* Contact Form */}
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="relative w-full max-w-2xl bg-gray-800/50 backdrop-blur-lg border border-purple-500/30 rounded-2xl shadow-xl p-8 space-y-6"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full border border-purple-500/30 rounded-lg p-3 bg-black/40 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full border border-purple-500/30 rounded-lg p-3 bg-black/40 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="w-full border border-purple-500/30 rounded-lg p-3 bg-black/40 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg shadow-md hover:scale-105 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Success / Error message */}
        {success && (
          <p className="text-center mt-4 text-sm text-gray-300">{success}</p>
        )}
      </form>

      {/* Social Links */}
      <div className="relative flex space-x-6 mt-10 text-2xl">
        <a
          href="https://www.linkedin.com/in/nader-ghaddar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/naderghaddar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:naderghaddar03@gmail.com"
          className="text-gray-400 hover:text-purple-400 transition"
        >
          <FaEnvelope />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </section>
  )
}
