import Respimg from "./Respimg";

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4 text-center">
      <h1 className="text-2xl font-bold">Vancouver Tree Explorer</h1>
      <Respimg
        src="/images/tree.jpg"
        caption="A beautiful tree in Vancouver"
      />
    </header>
  );
};

export default Header;
