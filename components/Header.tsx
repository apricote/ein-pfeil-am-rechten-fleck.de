import Image from "next/image";

export function Header() {
  return (
    <div className="flex justify-center pt-4">
      <Image
        className=""
        src="/placeholder.svg"
        height="150"
        width="300"
      ></Image>
    </div>
  );
}
