
import { Home, Trees, MapPin, Mail, Settings, LogOut, LogIn } from "lucide-react";
import { useLocation } from "react-router-dom";

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
            <a href="/" className={isActive("/")}>
              <Home size={20} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/about" className={isActive("/about")}>
              <MapPin size={20} />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="/woods" className={isActive("/woods")}>
              <Trees size={20} />
              <span>Woods</span>
            </a>
          </li>
          <li>
            <a href="/contact" className={isActive("/contact")}>
              <Mail size={20} />
              <span>Contact</span>
            </a>
          </li>
          {isLoggedIn && (
            <li>
              <a href="/cms" className={isActive("/cms")}>
                <Settings size={20} />
                <span>CMS</span>
              </a>
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
          <a href="/login" className="btn btn-login">
            <LogIn size={18} />
            <span>Login</span>
          </a>
        )}
      </div>
    </header>
  );
}

export default Header;