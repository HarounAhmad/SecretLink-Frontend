#!/bin/bash
set -e

# Run docker build with context pointing to frontend root, Dockerfile in docker/
cd ..

rm -rf dist/

npm install

npm run build -- --configuration production

# Build docker image from frontend root, specifying docker/Dockerfile explicitly
docker build -t secretlink-frontend:latest -f docker/Dockerfile .

echo "Frontend built and Docker image created successfully."
