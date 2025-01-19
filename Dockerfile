FROM imbios/bun-node

ARG UID=1000

RUN chown -R bun:bun /home/bun/app

USER bun

WORKDIR /home/bun/app

COPY package.json .
COPY prisma .
COPY src .
COPY eslint.config.mjs .
COPY tsconfig.json .

# ENV NODE_ENV=production

RUN bun install

CMD ["bun", "dev"]

EXPOSE 4000
