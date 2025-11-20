interface HeaderProps {
  currentRoute: string
  onNavigate: (route: string) => void
}

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Debug', path: '/debug' },
]

const Header = ({ currentRoute, onNavigate }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-nav">
        <div className="brand">Competition Template</div>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={`#${link.path}`}
              onClick={() => onNavigate(link.path)}
              className={currentRoute === link.path ? 'badge' : ''}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
