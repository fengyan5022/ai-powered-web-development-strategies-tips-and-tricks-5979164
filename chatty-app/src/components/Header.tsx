const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4 text-center">
      <h1 className="text-2xl font-bold">Vancouver Tree Explorer</h1>
      <figure>
        <img
          src="/images/tree-header.jpg"
          srcSet="/images/tree-header-small.jpg 480w, /images/tree-header-medium.jpg 768w, /images/tree-header-large.jpg 1200w"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 1200px"
          alt="A beautiful view of trees in Vancouver [from alt]"
          className="w-full h-auto"
        />
        <figcaption className="text-sm text-gray-200 mt-2">
          A beautiful view of trees in Vancouver [from figcaption11]
        </figcaption>
      </figure>
    </header>
  );
};

export default Header;
