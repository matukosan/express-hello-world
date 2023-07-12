This is a hello-world repo to showcase express running inside a Docker container in combination with nginx-proxy.

# Get started

```
npm install
docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.yml up -d node
curl api.lvh.me
```