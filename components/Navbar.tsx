import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import logo from "../public/logo_full.png";

const Navbar = () => {
  return (
    <nav className="bg-tertiary fixed inset-x-0 top-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center py-4 md:px-10 px-4">
        <section className="flex-grow hidden md:block">Search</section>
        <Link href="/">
          <Image
            objectFit="contain"
            src={logo}
            alt="logo"
            width={130}
            height={50}
          ></Image>
        </Link>
        <section className="flex-grow flex items-center justify-end gap-4">
          <Button>Sign In</Button>
          <Button className="hidden md:block" variant="outlined">
            Subscribe
          </Button>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
