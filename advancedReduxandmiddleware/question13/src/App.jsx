import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCoffee } from "./redux/coffeeActions";
import Sidebar from "./components/Sidebar";
import "./styles.css";
import CoffeeList from "./components/coffeeList";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoffee());
  }, [dispatch]);

  return (
    <div className="app">
      <Sidebar />
      <CoffeeList/>
    </div>
  );
}
