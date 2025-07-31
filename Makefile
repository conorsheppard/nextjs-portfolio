SHELL := /bin/bash

default: run

run:
	# Development
	npx next dev

run-with-turbo:
	# set package.json: "scripts": { "dev": "next dev --turbo" }
	npx next dev --turbo

build:
	npx run build

run-prod:
    # Production (after build)
	npm next start

prettier:
	npx prettier --write .

lint:
	npm run lint

.SILENT:
.PHONY: default run run-with-turbo build run-prod prettier lint
