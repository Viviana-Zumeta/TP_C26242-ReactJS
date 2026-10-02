import "./FilterCategory.css";

export const FilterCategory = ({ setCategory }) => {

  return (
    <div className="filtros">
      <button onClick={() => setCategory("todos")}>Todos</button>
      <button onClick={() => setCategory("Cocina")}>Cocina</button>
      <button onClick={() => setCategory("Vajilla")}>Vajilla</button>
      <button onClick={() => setCategory("Utensilios")}>Utensilios</button>
            
    </div>
    
  );
};