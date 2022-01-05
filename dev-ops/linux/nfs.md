# install
First, set up NAS NFS
- Make share folder
- NFS on
- Grant the user access

```bash
sudo apt install nfs-common -y
```

```bash
sudo mount -t nfs 192.168.0.30:/volume2/hshin /data
```

```bash
sudo vim /etc/fstab
```
```bash
192.168.0.30:/volume2/hshin    /data    auto,nofail,noatime,nolock,intr,tcp,actimeo=1800    0    0

```


```bash
sudo chmod -R 777 /data
```



https://acceptdefaults.com/2020/03/16/mounting-a-synology-share-in-ubuntu/
