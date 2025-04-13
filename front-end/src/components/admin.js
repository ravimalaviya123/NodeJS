import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FacultyDemo() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/product")
      .then((res) => res.json())
      .then((res) => {
        setFaculty(res);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/product/${id}`, { // Correct endpoint
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((res) => {
        setFaculty(faculty.filter((fac) => fac._id !== id));
      })
      .catch((error) => console.error("Error deleting:", error)); // Handle errors
  };
  

  const formattedFaculty = faculty.map((fac) => (
    <div className="card col-3">
      <img src={fac.image} className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">{fac.name}</h5>
        <h5 className="card-title">{fac.category}</h5>
        <p className="card-text">{fac.color}</p>
        <p className="card-text">{fac.price}</p>
        <p className="card-text">{fac.rating}</p>
        <p className="card-text">{fac.size}</p>
        {/* <Link to={`/faculty/${fac.id}`} className="btn btn-primary">
          Details
        </Link> */}
        <button
          className="btn btn-success"
          onClick={() => handleDelete(fac._id)}
        >
          Delete
        </button>
        <Link to={`/Edit/${fac.id}`} className="btn btn-primary">
          Edit
        </Link>
        <Link to="/Add" className="btn btn-success">
          Add
        </Link>
      </div>
    </div>
  ));

  return <div className="row">{formattedFaculty}</div>;
}
export default FacultyDemo;
