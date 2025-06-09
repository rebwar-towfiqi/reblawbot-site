import Link from "next/link";
import { useRouter } from "next/router";

import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { href: "/", label: "خانه" },
  { href: "/about", label: "درباره ما" },
  { href: "/pricing", label: "پلن‌های اشتراک" },
  { href: "/contact", label: "تماس با ما" },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="w-full bg-white shadow mb-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-3 px-4 gap-2">
        <div className="font-extrabold text-blue-700 text-xl">
          <Link href="/">RebLawBot</Link>
        </div>
        <ul className="flex gap-6 text-base font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                locale={router.locale}
                className={`hover:text-blue-700 transition ${
                  router.pathname === item.href ? "text-blue-700" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* دکمه تغییر زبان */}
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
