import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import logo from "../public/logo_full.png";
import TextField from "./TextField";
import { useState } from "react";
import Categories from "./Categories";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);

  return (
    <nav className="bg-tertiary">
      <div className="bg-tertiary fixed inset-x-0 top-0 w-full z-20">
        <div className="container mx-auto flex justify-between items-center py-4 md:px-10 px-4 gap-14">
          <section className="flex-1 hidden md:block">
            <TextField
              search
              onChange={handleChange}
              value={searchInput}
              placeholder="Search"
            />
          </section>

          <section className="cursor-pointer">
            <Link href="/general">
              <Image
                objectFit="contain"
                src={logo}
                alt="logo"
                width={130}
                height={50}
              />
            </Link>
          </section>
          <section className="flex-1 flex items-center justify-end gap-4">
            <Button>Sign In</Button>
            <Button className="hidden md:block" variant="outlined">
              Subscribe
            </Button>
          </section>
        </div>
      </div>
      <Categories />
    </nav>
  );
};

export default Navbar;
