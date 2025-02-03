import axios from "axios";
import { BikesNew } from './BikesNew';
import { BikesIndex } from './BikesIndex';
import { useState, useEffect } from "react";

export function BikesPage() {
  const [bikes, setBikes] = useState([]);

  const handleIndex = () => {
    console.log('Retrieving Bike Information...');

    axios.get('http://localhost:3000/bikes.json')
    .then(function (response) {
      console.log(response.data);
      setBikes(response.data);
    })
  }

  useEffect(handleIndex, []);

  return (
    <div>
      <BikesNew />
      <BikesIndex bikes={bikes} />
    </div>
  );
}