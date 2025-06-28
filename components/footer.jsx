export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Viknocity. Усі права захищено.
        </p>
        <a href="/policy" className="text-sm text-gray-500 underline">Політика конфіденційності</a>

        <p className="text-gray-500 text-sm mt-1">
          м. Дніпро | Тел: +38 (097) 000-00-00 | Email: viknocity@gmail.com
        </p>
      </div>
    </footer>
  );
}
