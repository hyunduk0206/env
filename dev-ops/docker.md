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
