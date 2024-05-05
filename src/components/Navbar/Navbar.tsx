"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Ilink {
  href: string;
  title: string;
}
const link: Ilink[] = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/contact", title: "Contact" },
  { href: "/blog", title: "Blog" },
  { href: "/admin", title: "Admin" },
];
const Navbar = () => {
  const pathname = usePathname().slice(1);
  // pathname;
  const NavItems = link.map((item: Ilink) => {
    return (
      <li key={item.href} className="text-lg">
        <Link
          className={`${
            item.title.toLowerCase() === pathname ||
            (pathname == "" && item.title == "Home")
              ? "bg-white text-black rounded-3xl "
              : ""
          } px-3 font-semibold text-[14px]`}
          href={item.href}
        >
          {item.title}
        </Link>
      </li>
    );
  });
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">LOGO</h1>
      </div>
      <div>
        <ul className="flex justify-center">{NavItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
