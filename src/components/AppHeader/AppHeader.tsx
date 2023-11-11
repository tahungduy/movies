import "./styled.scss";
import { MovieLogo } from "../../assets";
import { useNavigate } from "react-router-dom";

export function AppHeader() {
  const navigate = useNavigate();

  return (
    <div className=" header">
      <div className="flex pl-5" onClick={() => navigate("/")}>
        <MovieLogo />
        <div className="app-title">
          <h3 className="text-center">Movies</h3>
        </div>
      </div>
    </div>
  );
}
