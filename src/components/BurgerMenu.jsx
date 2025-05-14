import React, { useState, useEffect, useRef } from 'react';
import './BurgerMenu.css'; // We'll create this CSS file or use global styles

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerIconRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust offset as needed
        behavior: 'smooth',
      });
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerIconRef.current &&
        !burgerIconRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = [
    { href: '#introduction', label: 'Introduction' },
    { href: '#stance-positioning', label: 'Stance & Positioning' },
    { href: '#drills', label: 'Drills' },
    { href: '#swing-mechanics', label: 'Swing Mechanics' },
    { href: '#timing-recognition', label: 'Timing & Recognition' },
    { href: '#baseball-vs-softball', label: 'Baseball vs. Softball' },
  ];

  return (
    <div className="burger-menu-container">
      <div
        ref={burgerIconRef}
        className={`burger-icon ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
        aria-expanded={isOpen}
        aria-controls="burger-nav-menu"
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav
        ref={menuRef}
        id="burger-nav-menu"
        className={`menu-items ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="menu-link"
                onClick={(e) => handleLinkClick(e, item.href.substring(1))}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
