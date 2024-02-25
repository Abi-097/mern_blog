import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaAppStore } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
const Header = () => {
  return (
    <Navbar className="border-b-2">
      <Link to="/" className="flex items-center justify-center">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          <FaAppStore size={40} />
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search"
          rightIcon={IoMdSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <IoMdSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/signin">
          <Button gradientDuoTone="pinkToOrange">SignIn</Button>
        </Link>
        <Navbar.Collapse>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
