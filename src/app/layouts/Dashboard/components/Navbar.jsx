export const Navbar = () => {
  return (
    <div className="w-full h-screen">
      <header className="pb-2">
        <nav className="flex flex-row px-4 py-2 justify-between bg-slate-600 text-black shadow-lg">
          <div className="flex flex-row space-x-3">
            <NavLink to="/">Home</NavLink>
          </div>
          <ul className="flex flex-row space-x-3">
            <li>
              <NavLink to="/auth/login">Iniciar Sesión</NavLink>
            </li>
            <li>
              <NavLink to="/auth/register">Registrarse</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className="px-4 py-2">Landing</section>
    </div>
  );
};
