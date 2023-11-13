"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const currentPath = usePathname();

  const Links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 mb-5 px-5 border-b h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {Links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames("hover:text-zinc-800 transition-colors", {
              "text-zinc-500": currentPath !== link.href,
              "text-zinc-900": currentPath === link.href,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
