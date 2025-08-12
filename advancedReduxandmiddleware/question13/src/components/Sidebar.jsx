import { useDispatch } from "react-redux";
import { fetchCoffee, setSort } from "../redux/coffeeActions";

export default function Sidebar() {
  const dispatch = useDispatch();

  const handleSort = (order) => {
    dispatch(setSort(order));
    dispatch(fetchCoffee(order));
  };

  return (
    <div className="sidebar">
      <button onClick={() => handleSort("asc")}>Sort Price: Low → High</button>
      <button onClick={() => handleSort("desc")}>Sort Price: High → Low</button>
    </div>
  );
}
