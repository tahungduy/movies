import { MovieLogo } from "../../assets";
import { NavLink, useNavigate } from "react-router-dom";

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white p-4 font-bold flex flex-row" >
      <div className="flex pl-5" onClick={() => navigate("/")}>
        <MovieLogo />
        <div className="pl-2 justify-center items-center h-full flex flex-col">
          <h3 className="text-center">Canal+</h3>
        </div>

      </div>
      <nav>
        <ul className="flex">
          <li className="m-4">
            <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-yellow-500" : ""}>Home</NavLink>
          </li>
          <li className="m-4">
            <NavLink to="/movies" className={({ isActive }) => isActive ? "border-b-2 border-yellow-500" : ""}>Movies</NavLink>
          </li>
        </ul>
      </nav>
    </div >
  );
}

export default AppHeader;
