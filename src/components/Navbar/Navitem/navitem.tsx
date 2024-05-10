import Link from "next/link";

const Navitem = ({ item, pathname }: any) => {
  console.log(item, pathname);
  return (
    <li key={item.href} className="text-lg">
      <Link
        className={`${
          item.title.toLowerCase() === pathname ||
          (pathname == "" && item.title == "Homepage")
            ? "bg-white text-black rounded-3xl "
            : ""
        } px-3 font-semibold text-[14px]`}
        href={item.href}
      >
        {item.title}
      </Link>
    </li>
  );
};

export default Navitem;
