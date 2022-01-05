# install
First, set up NAS NFS
- Make share folder
- NFS on
- Grant the user access

```bash
sudo apt install nfs-common -y
```
# temp mount
```bash
sudo mount -t nfs 192.168.0.30:/volume2/hshin /data
```

# persistent mount
```bash
sudo vim /etc/fstab
```
Add the share’s mount path from the Synology share setup step to the bottom of the file using the line below
```bash
192.168.0.30:/volume2/hshin    /data    auto,nofail,noatime,nolock,intr,tcp,actimeo=1800    0    0
```
# permission
```bash
sudo chmod -R 777 /data
```



https://acceptdefaults.com/2020/03/16/mounting-a-synology-share-in-ubuntu/
