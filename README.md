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


1. Build all docker images
```bash
  cd cloud-disk-monorepo/microservices_workspace/auth_service
  docker build -t <image_name> .
```
Optional: To check whether image is broken or not after setting them all up we can compose them

```bash
  docker-compose up --build
```

2. Create Kubernetes recource files and start a local K8s cluster.
```bash
  cd cloud-disk-monorepo
  kubectl apply -f ./k8s -R
  minikube start
 ```
 
 To open live kubernetes dashboard
 
 ```bash
  minikube dashboard
 ```

## Environment Variables

To run this project, you will need to add the following environment variables to each services' .env file

`FILE_SERVICE_PORT`

`AUTH_SERVICE_PORT`

