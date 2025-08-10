import React, { useReducer, useState } from "react";

const initialState = {
  name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    city: {
      name: "",
      locality: {
        pinCode: "",
        landmark: "",
      },
    },
    state: "",
    coordinates: { latitude: "", longitude: "" },
  },
  courses_offered: [],
};

function reducer(state, action) {
  switch (action.type) {

    case "update_field":
      return { ...state, [action.field]: action.value };

    
    case "update_address":
      return {
        ...state,
        address: { ...state.address, [action.field]: action.value },
      };
    case "update_city":
      return {
        ...state,
        address: {
          ...state.address,
          city: { ...state.address.city, [action.field]: action.value },
        },
      };


    case "update_locality":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: { ...state.address.city.locality, [action.field]: action.value },
          },
        },
      };

    
    case "update_coordinates":
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: { ...state.address.coordinates, [action.field]: action.value },
        },
      };

    
    case "update_courses":
      return { ...state, courses_offered: action.value.split(",").map(c => c.trim()) };

    
    case "reset":
      return initialState;
    default:
      throw new Error("invalid action type");
  }
}

export default function CollegeForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(state);
    setError(null);
  };

  const handleDispatch = (type, field, value) => {
    try {
      dispatch({ type, field, value });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "1rem", border: "1px solid #ccc" }}>
      <h2>Add College</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="College Name"
          value={state.name}
          onChange={(e) => handleDispatch("update_field", "name", e.target.value)}
        />
        <input
          type="number"
          placeholder="Establishment Year"
          value={state.establishment_year}
          onChange={(e) => handleDispatch("update_field", "establishment_year", e.target.value)}
        />

        
        <input
          type="text"
          placeholder="Building"
          value={state.address.building}
          onChange={(e) => handleDispatch("update_address", "building", e.target.value)}
        />
        <input
          type="text"
          placeholder="Street"
          value={state.address.street}
          onChange={(e) => handleDispatch("update_address", "street", e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={state.address.city.name}
          onChange={(e) => handleDispatch("update_city", "name", e.target.value)}
        />
        <input
          type="text"
          placeholder="Pincode"
          value={state.address.city.locality.pinCode}
          onChange={(e) => handleDispatch("update_locality", "pinCode", e.target.value)}
        />
        <input
          type="text"
          placeholder="Landmark"
          value={state.address.city.locality.landmark}
          onChange={(e) => handleDispatch("update_locality", "landmark", e.target.value)}
        />
        <input
          type="text"
          placeholder="State"
          value={state.address.state}
          onChange={(e) => handleDispatch("update_address", "state", e.target.value)}
        />
        <input
          type="text"
          placeholder="Latitude"
          value={state.address.coordinates.latitude}
          onChange={(e) => handleDispatch("update_coordinates", "latitude", e.target.value)}
        />
        <input
          type="text"
          placeholder="Longitude"
          value={state.address.coordinates.longitude}
          onChange={(e) => handleDispatch("update_coordinates", "longitude", e.target.value)}
        />

    
        <input
          type="text"
          placeholder="Courses Offered (comma separated)"
          value={state.courses_offered.join(", ")}
          onChange={(e) => handleDispatch("update_courses", null, e.target.value)}
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={() => handleDispatch("reset")}>Reset</button>
      </form>

      
      {submittedData && (
        <div style={{ marginTop: "1rem", background: "#f8f8f8", padding: "1rem" }}>
          <h3>Submitted College Details:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
