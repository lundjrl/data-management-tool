#!/bin/bash

__file_exists() {
    test -f "$1"
}

if ! __file_exists ".env"; then
    echo "Please create the .env file:"
    echo "cp .env.example .env"
    exit 1
fi

docker compose pull || exit 1
docker compose build || exit 1
./bun install || exit 1
docker compose up || { docker compose down --remove-orphans; exit 0; }
