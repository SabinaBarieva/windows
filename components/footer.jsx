export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} ВікнаКомфорт. Усі права захищено.
        </p>
        <p className="text-gray-500 text-sm mt-1">
          м. Дніпро | Тел: +38 (097) 000-00-00 | Email: info@vikna.ua
        </p>
      </div>
    </footer>
  );
}
