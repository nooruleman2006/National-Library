'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-brand">
          <div className="nav-logo">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
              <rect x="6" y="8" width="4" height="20" rx="1" fill="#4e9af1"/>
              <rect x="12" y="5" width="4" height="23" rx="1" fill="#7ab8f5"/>
              <rect x="18" y="10" width="4" height="18" rx="1" fill="#4e9af1"/>
              <rect x="24" y="7" width="4" height="21" rx="1" fill="#7ab8f5"/>
              <rect x="5" y="28" width="24" height="2" rx="1" fill="#a8d0fa"/>
            </svg>
          </div>
          <div className="nav-brand-text">
            <span className="nav-brand-main">National</span>
            <span className="nav-brand-accent">Library</span>
          </div>
        </div>

        <nav className="nav-links">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="/members" className={`nav-link ${pathname === '/members' ? 'active' : ''}`}>Members</Link>
          <Link href="/books" className={`nav-link ${pathname === '/books' ? 'active' : ''}`}>Catalog</Link>
          <Link href="/issue-return" className={`nav-link ${pathname === '/issue-return' ? 'active' : ''}`}>Issue / Return</Link>
          <Link href="/fines" className={`nav-link ${pathname === '/fines' ? 'active' : ''}`}>Fines</Link>
        </nav>

        <div className="nav-right">
          <span className="nav-date">{new Date().toLocaleDateString('en-PK', { weekday:'short', year:'numeric', month:'short', day:'numeric' }).toUpperCase()}</span>
          <span className="nav-badge">ADMIN</span>
          <div className="nav-avatar">NL</div>
        </div>
      </div>
    </header>
  );
}
