import { CreateModel } from '../forms/CreateModel'
import { Body } from '../layouts/Main'

const Models = () => (
  <Body>
    <main>
      <h1>Models</h1>
      <a href="/ui">home</a>
      <button hx-get="/fn" hx-swap="outerHTML">
        Click Me!
      </button>
      <div>
        <CreateModel />
      </div>
    </main>
  </Body>
)

export default Models
