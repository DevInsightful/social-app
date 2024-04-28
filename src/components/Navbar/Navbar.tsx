import Link from "next/link";

interface Ilink {
  href: string;
  rel: string;
}
const link: Ilink[] = [
  { href: "/", rel: "Home" },
  { href: "/about", rel: "About" },
  { href: "/contact", rel: "Contact" },
  { href: "/blog", rel: "Blog" },
  { href: "/admin", rel: "Admin" },
];
const Navbar = () => {
  return (
    <div>
      <div>
        <h1>Navbar</h1>
      </div>
      <div>
        <ul className="bg-red-300 flex gap-6 justify-center">
          {link.map((item: Ilink) => {
            return (
              <li key={item.href} className="text-lg text-gray-500">
                <Link href={item.href}>{item.rel}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
