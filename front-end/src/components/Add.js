import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [data, setData] = useState({
    image: '',
  name: '',
  category: '',
  color: '',
  price: '',
  rating: '',
  size: ''
  });
  let navigate = useNavigate();

  function addFaculty() {
    fetch("http://localhost:8080/product", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" }
    }).then((res) => {
      navigate("/faculty");
    });
    return <></>;
  }
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, image: e.target.value });
        }}
        placeholder="Enter image"
      />
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
        placeholder="Enter name"
      />

      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, category: e.target.value });
        }}
        placeholder="Enter category"
      />
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, color: e.target.value });
        }}
        placeholder="Enter color"
      />
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, price: e.target.value });
        }}
        placeholder="Enter price"
      />
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, rating: e.target.value });
        }}
        placeholder="Enter rating"
      />
      
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, size: e.target.value });
        }}
        placeholder="Enter size"
      />
      <br />
      <input
        type="button"
        value="Add"
        onClick={() => {
          addFaculty();
        }}
      />
    </>
  );
}

export default Add;
