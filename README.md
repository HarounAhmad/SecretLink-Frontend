# SecretLink Frontend

## Overview

Angular SPA for creating and revealing one-time secrets.  
Uses PrimeNG UI components and proxies API calls to backend.

#### Note:
the backend
https://github.com/HarounAhmad/SecretLink/ 
is required for this application to work correctly

## Requirements

- Node.js 18+ (for local dev)
- Docker (for containerized build and deployment)
- Backend API running and accessible

## Configuration

Set API base URL in `src/environments/environment.ts` or environment variables at build time:

```ts
export const environment = {
  production: true,
  apiBaseUrl: 'http://localhost:8080/api/v1/secrets'
};
```

When deployed in Docker, set `API_BASE_URL` env var or configure proxy accordingly.

## Build & Run

### Locally

Install dependencies:

```bash
npm install
```

Run development server:

```bash
ng serve
```

Build production bundle:

```bash
npm run build -- --configuration production
```

### With Docker
navigate to the docker folder
Build Docker image:

```bash
docker build -t secretlink-frontend:latest -f docker/Dockerfile .
```

or use the build-docker.sh script
```bash
chmod +x build-docker.sh
./build-docker.sh
```
this will automatically build the project and create the docker file

Run container exposing port 80:

```bash
docker run -p 80:80 secretlink-frontend:latest
```


### With docker compose
after building the dockerfile navigate to the backend
https://github.com/HarounAhmad/SecretLink/ and clone it if not yet done
and follow the instructions in the README.md file to start the containers.

## Usage

- Navigate to `http://localhost`
- Create a secret with expiration date/time
- Click the generated link to copy it
- Share generated one-time link
- Reveal secret with the link

## Notes

- Frontend proxies `/api` requests to backend. Ensure backend URL configured properly.
- UI uses PrimeNG for styling and components.
- Adjust base URL depending on deployment environment.
