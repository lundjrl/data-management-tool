#!/bin/bash

docker compose run --rm --entrypoint=bun bun --user=$UID $@
