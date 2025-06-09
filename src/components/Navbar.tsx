import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { href: "/", label: "خانه" },
  { href: "/about", label: "درباره ما" },
  { href: "/pricing", label: "پلن‌های اشتراک" },
  { href: "/contact", label: "تماس با ما" },
];

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow mb-8">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo & Title */}
        <Link href="/" className="flex items-center gap-2 font-extrabold text-blue-700 text-xl">
          <Image
            src="/logo.png"
            alt="RebLawBot Logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span>RebLawBot</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-base font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`hover:text-blue-700 transition ${
                    router.pathname === item.href ? "text-blue-700" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="منو"
        >
          <span className={`block w-6 h-0.5 bg-blue-700 mb-1 rounded transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-blue-700 mb-1 rounded transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-blue-700 rounded transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-8 pb-4 bg-white border-b shadow">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2 text-base font-medium rounded ${
                    router.pathname === item.href ? "text-blue-700" : "text-gray-700"
                  } hover:text-blue-700 transition`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Language Switcher for mobile */}
          <div className="mt-4">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
