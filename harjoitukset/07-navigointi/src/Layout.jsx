import { Link, Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <header className="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <nav>
            <ul>
              <li>
                <Link to="/">Etusivu</Link>
              </li>
              <li>
                <Link to="/listaus">Listaus</Link>
              </li>
              <li>
                <Link to="/lisays">Lisäys</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="min-h-screen flex flex-col bg-linear-to-br from-blue-50 via-white to-purple-50">
        <div className="flex-1 container mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
            Super People
          </h2>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
