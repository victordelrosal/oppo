import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current && 
      !menuRef.current.contains(event.target) &&
      burgerRef.current && 
      !burgerRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { id: "introduction", icon: "📚", title: "Introduction", description: "Begin your opposite field hitting journey" },
    { id: "stance-positioning", icon: "🧍", title: "Stance & Positioning", description: "Set up for success" },
    { id: "drills", icon: "🏋️", title: "Drills", description: "Practice techniques for improvement" },
    { id: "swing-mechanics", icon: "🏏", title: "Swing Mechanics", description: "Techniques for proper contact" },
    { id: "timing-recognition", icon: "👁️", title: "Timing & Recognition", description: "Read pitches effectively" },
    { id: "baseball-vs-softball", icon: "⚾", title: "Baseball vs. Softball", description: "Key differences in approach" }
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo">
          <h1>Opposite Field Hitting</h1>
        </div>
        
        {/* Burger Menu Button */}
        <button 
          ref={burgerRef}
          className={`burger-button ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="navigation-menu"
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Navigation (visible on larger screens) */}
        <nav className="desktop-nav">
          <ul>
            {navItems.map(item => (
              <li key={item.id}>
                <button onClick={() => handleNavClick(item.id)}>
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu (slides in when burger clicked) */}
      <nav 
        id="navigation-menu"
        ref={menuRef}
        className={`mobile-nav ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul>
          {navItems.map(item => (
            <li key={item.id}>
              <button onClick={() => handleNavClick(item.id)}>
                <span className="nav-icon">{item.icon}</span>
                <div className="nav-text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
