
import type { FC, ReactNode } from 'react'

import { Html } from '@elysiajs/html'
import { Children } from '@kitajs/html'

type Props = {
  children: Children
}

const html = ({children}: Props) => <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Data Management Tool</title>
    <link rel="stylesheet" href="https://unpkg.com/98.css" />
    <script src="https://unpkg.com/htmx.org@1.9.10"/>
  </head>
  <body style="background-color: #c0c0c0">{children}</body>
</html>


export const Body: FC<Props> = (props) => html(props) as ReactNode
