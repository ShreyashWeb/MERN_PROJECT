
import { Home, Trees, MapPin, Mail, Settings, LogOut, LogIn } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

function Header() {
  const location = useLocation();
  
  const handleLogout = () => {
    localStorage.clear()
    window.location.reload(true);
  }

  const isLoggedIn = localStorage.getItem('token');

  const isActive = (path) => {
    return location.pathname === path ? "nav-item active-nav" : "nav-item";
  }

  return (
    <header className="header">
      <div className="logo">
        <Trees className="logo-icon" size={32} />
        <h2>MyWoods</h2>
      </div>

      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive("/")}>
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about")}>
              <MapPin size={20} />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/woods" className={isActive("/woods")}>
              <Trees size={20} />
              <span>Woods</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive("/contact")}>
              <Mail size={20} />
              <span>Contact</span>
            </Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/cms" className={isActive("/cms")}>
                <Settings size={20} />
                <span>CMS</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <div className="header-actions">
        {isLoggedIn ? (
          <button className="btn btn-logout" onClick={handleLogout}>
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        ) : (
          <Link to="/login" className="btn btn-login">
            <LogIn size={18} />
            <span>Login</span>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;