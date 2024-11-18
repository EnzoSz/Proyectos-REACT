import "../css/Filters.css";
import {  useId } from "react";
import { useFilter } from "../hooks/useFilter";
export const Filters = () => {
  const { filters ,setFilters } = useFilter();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  console.log(minPriceFilterId);
  console.log(categoryFilterId);
  //aqui algo huele mal
  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({ ...prevState, minPrice: e.target.value }));
  };
  const handleCategoryChange = (e) => {
    setFilters((prevState) => ({ ...prevState, category: e.target.value }));
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          name="price"
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría:</label>
        <select
          id={categoryFilterId}
          name="category"
          onChange={handleCategoryChange}
        >
          <option value="all">Todas</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
        </select>
      </div>
    </section>
  );
};
