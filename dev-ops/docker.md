### frequently used commands
```bash
sudo docker image ls
```


### How to copy Docker images from one host to another without using a repository
You will need to save the Docker image as a tar file:
```bash
sudo docker save -o <path for generated tar file> <image name>
```
Then copy your image to a new system with regular file transfer tools such as cp, scp or rsync(preferred for big files). After that you will have to load the image into Docker:
```bash
sudo docker load -i <path to image tar file>
```


### Run Docker without sudo Linux
```bash
sudo groupadd docker
sudo usermod -aG docker $USER
```
- Log out and log back to activate the group membership in Linux or you can run


### Manage containers
- List all containers
``` bash
sudo docker ps -a
```

### etc


``` bash
sudo docker volume ls
```

### Clean up
- Why the "none" image appears in Docker and how can we avoid it
```bash
docker rmi $(docker images -f "dangling=true" -q)
```

- Kill all running containers

``` bash
sudo docker kill $(sudo docker ps -q)
``` 

- Prune your entire system

``` bash
sudo docker system prune -a --volumes
```
