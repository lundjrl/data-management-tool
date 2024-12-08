#!/bin/bash

__file_exists() {
  test -f "$1"
}

if ! __file_exists ".env"; then
    echo "Please create the .env file:"
    echo "cp .env.example .env"
    exit 1
fi

export $(cat .env | xargs)

mkdir -p docs/public

echo "Downloading OpenAPI spec to public directory..."

curl "http://localhost:4000/schema/json" \
  -o docs/public/openapi.json
