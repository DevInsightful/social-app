"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navitem from "./Navitem/navitem";
import { title } from "process";

interface Ilink {
  href: string;
  title: string;
}
const link: Ilink[] = [
  { href: "/", title: "Homepage" },
  { href: "/about", title: "About" },
  { href: "/contact", title: "Contact" },
  { href: "/blog", title: "Blog" },
  // { href: "/admin", title: "Admin" },
];
const Navbar = () => {
  const pathname = usePathname().slice(1);
  const isSession = false;
  const isAdmin = true;

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">LOGO</h1>
      </div>
      <div>
        <ul className="flex justify-center">
          {link.map((item: Ilink) => (
            <Navitem item={item} pathname={pathname} />
          ))}
          {isSession ? (
            isAdmin && (
              <Navitem
                item={{ href: "/admin", title: "Admin" }}
                pathname={pathname}
              />
            )
          ) : (
            <Navitem
              item={{ href: "/login", title: "Login" }}
              pathname={pathname}
            />
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
