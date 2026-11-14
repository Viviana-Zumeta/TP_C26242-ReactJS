import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import{ FilterCategory} from "./FilterCategory";
import { getByCategory } from "../../services/productsServices";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);
  const {category} = useParams();
  


  useEffect(() => {
     //Usamos la funcion del productsService.js
    getByCategory(category)
      
      .then((data) => setProducts(data))
      .catch((error) => setErrors(error.message))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) return <p>Cargando...</p>;
  if (errors) return <p>{errors}</p>;

  const productosFiltrados =
    !category ||  "todos"
      ? products
      : products.filter(p => p.category === category);

  return (
    <section>
      <h1>Nuestros Productos</h1>
      <div>
      <FilterCategory  />  
      <ItemList products={productosFiltrados} />
      </div>
    </section>
  );
};