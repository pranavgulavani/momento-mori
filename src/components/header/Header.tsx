import { PiSkullThin } from "react-icons/pi";

export default function Header() {
  return (
    <header className="border shadow-sm h-full flex items-center justify-center sm:justify-center md:justify-start p-3">
      <div className="md:mx-8 flex">
        <PiSkullThin fontSize="1.8em" />
        <h3 className="text-xl lg:text-2xl pl-1">Momento Mori</h3>
      </div>
    </header>
  );
}
