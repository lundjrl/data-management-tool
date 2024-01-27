#!/bin/bash

docker compose pull || exit 1
docker compose build || exit 1
./bun install
# ./bun install prisma @prisma/client @prisma/cli || exit 1
# ./bun run prisma init || exit 1
# ./bun run prisma generate || exit 1


echo "James After prisma init"
docker compose up || { docker compose down --remove-orphans; exit 0; }
