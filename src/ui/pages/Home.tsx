import type { ReactNode } from 'react'

import { Html } from '@elysiajs/html'

import { Body } from '../layouts/Main'

const Home = () => (
  <Body>
    <main>
      <h1>Home</h1>
      <a href="/ui/models">models</a>
    </main>
  </Body>
) as ReactNode

export default Home
