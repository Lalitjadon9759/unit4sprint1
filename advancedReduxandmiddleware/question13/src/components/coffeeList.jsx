import { useSelector } from "react-redux";

export default function CoffeeList() {
  const { data, loading, error } = useSelector((state) => state.coffee);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="grid">
      {data.map((coffee) => (
        <div className="card" key={coffee.id}>
          <img src={coffee.image} alt={coffee.name} />
          <h3>{coffee.name}</h3>
          <p>Price: ₹{coffee.price}</p>
        </div>
      ))}
    </div>
  );
}
