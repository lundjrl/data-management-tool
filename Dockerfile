FROM imbios/bun-node

WORKDIR /app

COPY package.json .
# COPY bun.lockb .

COPY prisma .
COPY src .
COPY eslint.config.mjs .
COPY tsconfig.json .

RUN bun install --production

ENV NODE_ENV production
CMD ["bun", "src/index.ts"]

EXPOSE 4000
