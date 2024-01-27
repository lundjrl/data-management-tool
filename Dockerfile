FROM oven/bun:latest

WORKDIR /app

# Workaround for getting prisma cli to work inside container
COPY --from=node:18 /usr/local/bin/node /usr/local/bin/node

COPY package.json .
COPY bun.lockb .

RUN bun install prisma @prisma/cli @prisma/client
RUN bun run prisma init
RUN bun prisma generate

RUN bun install

COPY src src
COPY tsconfig.json .

ENV NODE_ENV production

RUN bun run prisma generate

CMD ["bun", "src/index.ts"]

EXPOSE 8055
