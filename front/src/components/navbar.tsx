const Navbar = () => {
  return (
    <nav className="p-4 px-10 flex items-center justify-between">
      <h1 className="text-2xl">Weather</h1>
      <div>
        {/* TODO: Add form */}
        <input type="text" />
      </div>

      <div className="flex gap-6">
        {/* TODO: Add navlinks */}
        <a href="#">Home</a>
        <a href="#">Statistics</a>
      </div>
    </nav>
  )
}

export default Navbar
