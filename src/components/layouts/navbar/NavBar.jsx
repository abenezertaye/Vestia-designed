import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="container">
        <div className="sect">
          <h1 className="title">Vestia</h1>
        </div>
        <ul className="navbar__links">
          <li>Home</li>
          <li>Men</li>
          <li>Women</li>
          <li>Collection</li>
          <li>About</li>
        </ul>
        <div className="sect">
          <button className="shop-now-btn">
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
