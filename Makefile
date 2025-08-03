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

# Docker commands
docker-dev:
	# Start development server with Docker
	docker-compose up nextjs-dev

docker-dev-build:
	# Build and start development server with Docker
	docker-compose up --build nextjs-dev

docker-prod:
	# Start production server with Docker
	docker-compose up nextjs-prod

docker-prod-build:
	# Build and start production server with Docker
	docker-compose up --build nextjs-prod

docker-stop:
	# Stop all Docker containers
	docker-compose down

docker-clean:
	# Stop and remove all containers, networks, and images
	docker-compose down --rmi all --volumes --remove-orphans

.SILENT:
.PHONY: default run run-with-turbo build run-prod prettier lint docker-dev docker-dev-build docker-prod docker-prod-build docker-stop docker-clean
