import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, PenSquare } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <Sparkles size={24} />
          Nebula Notes
        </Link>
        <nav>
          <Link to="/create" className="btn btn-primary">
            <PenSquare size={18} />
            Write Post
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
