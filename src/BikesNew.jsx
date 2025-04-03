export function BikesNew({ onCreate }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  };

  return (
    <div id="bikes-new">
      <h1>New Bike Listing</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Bike Name: <input type="text" name="name"/>
        </div>
        <div>
          Bike Brand: <input type="text" name="brand"/>
        </div>
        <div>
          Bike Year: <input type="text" name="model_year"/>
        </div>
        <div>
          Price: <input type="number" name="price"/>
        </div>
        <div>
          Description: <input type="text" name="description"/>
        </div>
        <div>
          Category: <input type="text" name="category"/>
        </div>
        <div>
          Image URL: <input type="string" name="image_url"/>
        </div>
        <button type="submit">Create Listing</button>
      </form>
    </div>
  )
}