import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import{ FilterCategory} from "./FilterCategory";
export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [category, setCategory] = useState("todos");


  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar los productos");
        }

        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setErrors(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (errors) return <p>{errors}</p>;

  const productosFiltrados =
    category === "todos"
      ? products
      : products.filter(p => p.category === category);

  return (
    <section>
      <h1>Nuestros Productos</h1>
      <div>
      <FilterCategory setCategory={setCategory} />  
      <ItemList products={productosFiltrados} />
      </div>
    </section>
  );
};