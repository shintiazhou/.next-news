import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-tertiary fixed inset-x-0 top-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center py-4 px-10">
        <section className="flex-1">Search</section>
        <Link href="/">
          <div className="logo-text">.NextNews</div>
        </Link>
        <section className="flex-1 flex items-center justify-end gap-4">
          <Button>Sign In</Button>
          <Button variant="outlined">Subscribe</Button>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
