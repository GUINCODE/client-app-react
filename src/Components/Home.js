import axios from 'axios';
import React, {  Component } from "react";
import { useState, useEffect } from 'react';
import { Link , Navigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";




const  Home =()=> {

  const [cours, setCours] =useState([])
  const [status, setStatus]=useState(1)
 
   useEffect(() => {
     const url = "https://localhost:5001/api/cours";
     axios
       .get(url)
       .then((response) => {
         setCours(response.data);
         // console.log(this.state.cours);
       })
       .catch((error) => {
         console.log(error);
       });
   }, [status]);

 
  const supprimer=(e)=>{
    const id = e.target.value;
   const url = "https://localhost:5001/api/cours/"+id
    axios
      .delete(url)
      .then(() => {
        setStatus(status+1)
      });
  }
    return (
      <div className="d-flex w-75 flex-column mx-auto">
        <h3>Bienvenue </h3>
        <table className="table table-bordered table-hover table-striped table-light  ">
          <thead className="table-dark ">
            <tr>
              <th>Identifiant</th>
              <th>Cours</th>
              <th colSpan="3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cours.map((item, key) => (
              <tr key={key}>
                <td>{item.id}</td>
                <td> {item.nom}</td>
                <td>
                  <Link to={"/edit/" + item.id}>
                    <button className="btn btn-outline-primary mr-2">
                      {" "}
                      Edit{" "}
                    </button>
                  </Link>
                  <Link to={"/details/" + item.id}>
                    <button className="btn btn-outline-secondary mr-2">
                      {" "}
                      Détails{" "}
                    </button>
                  </Link>

                  <button
                    className="btn btn-outline-danger" value={item.id}
                    id="sup"
                    onClick={supprimer}
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  
}

export default Home;