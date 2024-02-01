//  Super basic form that submits to create new table endpoint.

// Example request body to our API

export const CreateModel = () => (
  <>
    <h3>Create new Model</h3>
    <form hx-post="/fn">
      <label for="name">Name:</label>
      <input id="name" placeholder="name" title="name" type="text" />
      <button type="button">Submit</button>
    </form>
  </>
)
