import Link from "next/link";

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
  const NavItems = link.map((item: Ilink) => {
    return (
      <li key={item.href} className="text-lg text-gray-500">
        <Link href={item.href}>{item.title}</Link>
      </li>
    );
  });
  return (
    <div>
      <div>
        <h1>Navbar</h1>
      </div>
      <div>
        <ul className="bg-red-300 flex gap-6 justify-center">{NavItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
