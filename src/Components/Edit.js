import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import {Link} from 'react-router-dom'

const Edit = () => {
  const [load, setLoad] = useState(false);
  const [itemID, setItemID] = useState(useParams().id);
  const [cour, setCour] = useState([]);
  const [nom,setNom]=useState("a")
  const loadData=() => {
  const url = "https://localhost:5001/api/cours/" + itemID;
  console.log(url);
  axios
    .get(url)
    .then((response) => {
      setCour(response.data);
      setLoad(true)
      setNom(cour.nom)
    })
    .catch((error) => {
      console.log(error);
    });
      
  };

  useEffect(() => {
    loadData();
    // console.log("tableau des cours ");
    console.log(cour);
  }, [load]);

  const handlChange = (e) => {
    console.log("change handle");
    setNom(e.target.value)
  };
  return (
    <div>
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <h3>Modifier le cours {cour.nom}</h3>
        <form className="w-50 mt-2">
          <div className="form-group  ">
            <input
              type="text"
              name="nom"
              id={itemID}
              defaultValue={cour.nom}
              className="form-control text-center"
              placeholder="intitulé du cours"
              onChange={handlChange}
              required
            />
          </div>
          <div className="form-group  ">
            <input
              type="submit"
              name=""
              id=""
              value="Update"
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

export default Edit;