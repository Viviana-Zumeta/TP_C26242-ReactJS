import { Link } from "react-router-dom";
import "./FilterCategory.css";

export const FilterCategory = () => {
  return (
    <div className="filtros">
      <Link to="/" className="filtros-button">Todos</Link>
      <Link to="/category/Cocina" className="btn-filtro">Cocina</Link>
      <Link to="/category/Vajilla" className="btn-filtro">Vajilla</Link>
      <Link to="/category/Utensilios" className="btn-filtro">Utensilios</Link>
    </div>
  );
};