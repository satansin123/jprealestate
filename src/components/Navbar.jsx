import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex max-w-screen-xl mx-auto pt-8 z-10 relative text-white">
      <Logo />
      {/* Add other navbar elements here */}
    </div>
  );
};

export default Navbar;
