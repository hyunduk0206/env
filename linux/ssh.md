## How to fix: "WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED" on Mac and Linux

```bash
ssh-keygen -R [hostname-or-IP]
```

## ssh setting

### remote

```bash
mkdir ~/.ssh
```

### local

```bash
ssh-keygen -t rsa -b 4096
```

```bash
scp ~/.ssh/id_rsa.pub s@ssu20300:/home/s/.ssh/uploaded_key.pub
```

### remote

```bash
cat ~/.ssh/uploaded_key.pub >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh/
chmod 600 ~/.ssh/*
```

### alias

```bash
vim ~/.ssh/config
```

```bash
Host su20300
    HostName 192.168.10.5
    User s
```