# cloud-disk-monorepo

Pet project. Microservice architecture practice.

Backend Stack: NodeJS, Express, Typescript, RabbitMQ, Docker, Kubernetes.

Frontend Stack: ReactJS, RTK-Query, Redux, Typescript

Databases: MongoDb, Redis



## Installation and deployment

Install cloud-disk-app with docker-compose

```bash
  docker-compose up -d --build
  docker-compose up
```
Also deployment is available via local Kubernetes cluster (minikube)

```bash
  cd cloud-disk-monorepo
  kubectl apply -f ./k8s -R
  minicube start
 ```
 
 To open live kubernetes dashboard
 
 ```bash
  minicube dashboard
 ```

## Environment Variables

To run this project, you will need to add the following environment variables to each services' .env file

`FILE_SERVICE_PORT`

`AUTH_SERVICE_PORT`

