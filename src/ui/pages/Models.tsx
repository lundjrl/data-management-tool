import type { FC, ReactNode } from 'react'

import { Html } from '@elysiajs/html'

import { CreateModel } from '../forms/CreateModel'
import { Body } from '../layouts/Main'

const Models: FC = () => (
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
) as ReactNode

export default Models
