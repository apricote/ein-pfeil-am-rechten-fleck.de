import Link from "next/link";

export const Nav = () => {
  // flex items-center justify-around mt-4 mb-4
  return (
    <ul className="m-4 text-center justify-center">
      <NavLink href="/#intro" text="Einführung" />
      <NavLink href="/#heroes" text="Unsere Helden" />
      <NavLink href="/#listen" text="Hörprobe" />
      <NavLink href="/buy" text="Kaufen" />
    </ul>
  );
};

function NavLink(props: { href: string; text: string }) {
  const { href, text } = props;

  return (
    <li className="block w-1/2 bg-amber-800">
      <Link href={href}>
        <a className="text-gray-300 hover:text-amber-200 focus:text-amber-200 focus:outline-none transition">
          {text}
        </a>
      </Link>
    </li>
  );
}
