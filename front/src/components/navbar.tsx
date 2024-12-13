import { NavLink } from 'react-router'
import { LocationSearch } from './locationSearch'

const Navbar = () => {
  return (
    <nav className="p-4 px-10 flex items-center justify-between bg-[#0c0b11]">
      <h1 className="text-2xl">Weather</h1>
      <div className="my-1">
        <LocationSearch />
      </div>

      <div className="flex gap-6">
        {/* TODO: Add navlinks */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
        >
          Home
        </NavLink>
        <NavLink
          to="/stats"
          className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
        >
          Stats
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
