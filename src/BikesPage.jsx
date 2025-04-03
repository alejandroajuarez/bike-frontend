import axios from "axios";
import { BikesNew } from './BikesNew';
import { BikesIndex } from './BikesIndex';
import { useState, useEffect } from "react";

export function BikesPage() {
  const [bikes, setBikes] = useState([]);

  const handleIndex = () => {
    console.log('Retrieving Bike Information...');

    axios.get('/bikes.json')
    .then(function (response) {
      console.log(response.data);
      setBikes(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handle Create");
    axios.post("/bikes.json", params).then((response) => {
      setBikes([...bikes, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndex, []);

  return (
    <div>
      <BikesNew onCreate={handleCreate} />
      <BikesIndex bikes={bikes} />
    </div>
  );
}