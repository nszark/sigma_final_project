import { Link } from "react-scroll";
import { useLayoutEffect, useState } from "react";

// Calculate default theme based on current time
const isDarkTheme = new Date().getHours();
const defaultTheme = isDarkTheme > 6 && isDarkTheme < 21 ? "light" : "dark";

// Custom hook to manage theme state and update the document"s attribute and sessionStorage accordingly
function useTheme() {
  const [theme, setTheme] = useState(
    sessionStorage.getItem("app-theme") || defaultTheme
  );

  // Update theme attribute and sessionStorage whenever the theme state changes
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    sessionStorage.setItem("app-theme", theme);
  }, [theme]);

  return { theme, setTheme };
}

function Header() {
  // Use the useTheme hook to manage theme state
  const { theme, setTheme } = useTheme();

  // Function to toggle theme when the theme button is clicked
  const handleThemeToggleClick = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // Render the header component with links, logo, buttons, etc.
  return (
    <header className="header">
      <div className="header-wrapper _container">
        <div className="header-logo">
          <img src="/src/img/logo.png" alt="logo" />
        </div>
        <nav className="header-nav">
          <ul className="header-nav__list">
            {/* Link components from "react-scroll" library */}
            <Link className="header__link" to="home" smooth={true} offset={-150}>
              HOME
            </Link>
            <Link className="header__link" to="successfulyDone" smooth={true} offset={-300}>
              PROJECT
            </Link>
            <Link className="header__link" to="services" smooth={true} offset={-150}>
              SERVICES
            </Link>
            <Link className="header__link" to="aboutUs" smooth={true} offset={-100}>
              ABOUT
            </Link>
            <Link className="header__link" to="blog" smooth={true} offset={-250}>
              BLOG
            </Link>
            <Link className="header__link" to="form" smooth={true} duration={1500}>
              SHOP
            </Link>
            <Link className="header__link" to="footer" smooth={true} duration={2500}>
              CONTACT
            </Link>
          </ul>
        </nav>
        <div className="header-button">
          <button className="header-button-style">Sign Up</button>
          {/* Toggle button to switch between light and dark themes */}
          <div variant="secondary" onClick={handleThemeToggleClick}>
            <div className="button-theme-icon">
            {/* Render different icon images based on the current theme */}
            {theme === "light" && (
              <div className="button-theme-icon">
                <img src="/src/icon/light_theme.png" alt="" />
              </div>
            )}
            {theme === "dark" && (
              <div className="button-theme-icon">
                <img src="/src/icon/dark_theme.png" alt="" />
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;