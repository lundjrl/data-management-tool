FROM imbios/bun-node

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
COPY eslint.config.mjs .
COPY tsconfig.json .

ENV NODE_ENV production
CMD ["bun", "src/index.ts"]

EXPOSE 4000
