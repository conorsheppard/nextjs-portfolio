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

.SILENT:
.PHONY: default run run-prod prettier
