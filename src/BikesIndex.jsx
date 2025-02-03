export function BikesIndex({ bikes }) {
  return (
    <div id="bikes-index">
      <h1>All Bikes</h1>
      {bikes.map((bike) => (
        <div key={bike.id} className="Bikes">
          <h2>{bike.year} {bike.brand} {bike.name} | {bike.category}</h2>
          <img src={bike.image_url} />
          <h3>{bike.price}</h3>
          <p>{bike.description}</p>
          </div>
      ))}

    </div>
  )
}