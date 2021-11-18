import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Ajout = () => {
  const [courName, setCourName] = useState("");
  const handlChange = (e) => {
    setCourName(e.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
            const cour = {
            nom: courName,
            };
    const url = "https://localhost:5001/api/cours";
      axios
        .post(url,cour)
        .then(function (response) {
          setCourName("")
         document.getElementById("champCour").value = "";
        
        })
        .catch(function (error) {
          console.log("badddd");
        });

  };
   
  return (
    <div>
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <h3>Ajouter un nouveau cours</h3>
        <form onSubmit={onSubmit} className="w-50 mt-2">
          <div className="form-group  ">
            <input
              type="text"
              name="nom"
              id="champCour"
              defaultValue=""
              className="form-control text-center"
              placeholder="intitulé du cours"
              required
              onChange={handlChange}
            />
          </div>
          <div className="form-group  ">
            <input
              type="submit"
              name=""
              id=""
              value="Ajouter"
              className="btn btn-outline-info mr-5"
            />
            <Link to={"/"} className="ml-5">
              <input
                type="button"
                name=""
                id=""
                value="Annuler"
                className="btn btn-outline-dark ml-auto"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ajout;
