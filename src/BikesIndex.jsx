export function BikesIndex({ bikes }) {
  console.log(bikes);
  
  return (
    <div id="bikes-index">
      <h1>All Bikes</h1>
      {bikes.map((bike) => (
        <div key={bike.id} className="Bikes">
          <div>
            <h2>{bike.year} {bike.brand} {bike.name} | {bike.category}</h2>
          </div>
          <div>
            <img src={bike.image_url} />
          </div>
          <div>
            {/* bike price is hardcoded just for the example */}
            <h3>${bike.price}.99</h3>
          </div>
          <div>
            <p>{bike.description}</p>
          </div>
          <br />
          <br />
        </div>

      ))}

    </div>
  );
}