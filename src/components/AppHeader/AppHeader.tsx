import { MovieLogo } from "../../assets";
import { Link, useNavigate } from "react-router-dom";

export function AppHeader() {
  const navigate = useNavigate();

  return (
    <div className="text-white p-4 font-bold flex flex-row">
      <div className="flex pl-5" onClick={() => navigate("/")}>
        <MovieLogo />
        <div className="pl-2 justify-center items-center h-full flex flex-col">
          <h3 className="text-center">Canal+</h3>
        </div>
        <nav>
          <ul className="flex">
            <li className="m-4">
              <Link to="/">Home</Link>
            </li>
            <li className="m-4">
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  );
}
