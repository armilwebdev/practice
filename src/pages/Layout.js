import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="">
      <div className="bg-stone-700 text-neutral-100 p-2">
      <nav>
        
        <ul className="flex flex-row">
          <li className="px-4 hover:bg-violet-600">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:bg-violet-600">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="px-4 hover:bg-violet-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 hover:bg-violet-600">
            <Link to="/practice">Practice</Link>
          </li>     
          <li className="px-4 hover:bg-violet-600">
            <Link to="/driverslist">Drivers</Link>
          </li>                   
          <li className="px-4 hover:bg-violet-600">
            <Link to="/raceslist">Races</Link>
          </li>          
        </ul>
      </nav>
      </div>
      <Outlet />
      {/* <footer className="bg-stone-900 text-gray-100 px-4 py-4">
        Footer
      </footer> */}
      </div>
    </>
  )
};

export default Layout;