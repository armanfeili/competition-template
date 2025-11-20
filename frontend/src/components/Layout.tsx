import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
  currentRoute: string
  onNavigate: (route: string) => void
}

const Layout = ({ children, currentRoute, onNavigate }: LayoutProps) => {
  return (
    <div className="container">
      <Header currentRoute={currentRoute} onNavigate={onNavigate} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
