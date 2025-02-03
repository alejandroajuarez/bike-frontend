export function BikesNew() {
  return (
    <div id="bikes-new">
      <h1>New Bike Listing</h1>
      <form>
        <div>
          Bike Name: <input type="text" />
        </div>
        <div>
          Bike Brand: <input type="text" />
        </div>
        <div>
          Bike Year: <input type="text" />
        </div>
        <div>
          Price: <input type="number" />
        </div>
        <div>
          Description: <input type="text" />
        </div>
        <div>
          Category: <input type="text" />
        </div>
        <div>
          Image URL: <input type="url" />
        </div>
        <button type="submit">Create Listing</button>
      </form>
    </div>
  )
}