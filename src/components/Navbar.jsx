import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Navbar() {
  return (
    <>
      <nav className="flex justify-evenly bg-gradient-to-r from-teal-400 to-blue-500  text-white font-serif text-xl">
        <Link className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500" to="/"><p className="px-2">Home</p></Link>
        <Link className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500" to="/course"><p className="px-2">Course</p></Link>
        <Link className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500" to="/about"><p className="px-2">About</p></Link>
        <Link className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500" to="/syllabus"><p className="px-2">Syllabus</p></Link>
        <Link className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500" to="/contact"><p className="px-2">Contact Us</p></Link>
        <header className="flex items-center justify-center px-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      </nav>
    </>
  );
}

export default Navbar;
