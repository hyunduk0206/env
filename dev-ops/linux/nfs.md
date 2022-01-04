# install
First, set up NAS NFS
- Make share folder
- NFS on
- Grant the user access

```bash
sudo apt-get install nfs-common -y
```

```bash
sudo mount -t nfs 192.168.0.30:/volume2/hshin /data
```

```bash
sudo chmod -R 777 /data
```

https://acceptdefaults.com/2020/03/16/mounting-a-synology-share-in-ubuntu/
