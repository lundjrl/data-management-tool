#!/bin/bash

docker compose pull || exit 1
docker compose build || exit 1
bun install || exit 1
docker compose up || { docker compose down --remove-orphans; exit 0; }