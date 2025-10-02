export default function Footer() {
  return (
    <footer className="p-6 bg-gray-900 text-gray-400 text-center">
      <div className="max-w-screen-xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Nader Ghaddar — All rights reserved.
      </div>
    </footer>
  )
}
