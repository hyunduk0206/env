# watch gpu usage
```bash
nvidia-smi -l 1
```

# cuda install (use run file)

- 7.3. Disabling Nouveau
<https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#runfile-nouveau-ubuntu>
```bash
sudo vim <path>
```
- setup paths (cuda 11.1.1)
```bash
echo 'export PATH=/usr/local/cuda-11.1/bin:$PATH' >> ~/.zshrc
echo 'export LD_LIBRARY_PATH=/usr/local/cuda-11.1/lib64:$LD_LIBRARY_PATH' >> ~/.zshrc
source ~/.zshrc
```
```bash
nvcc -V
```

# uninstall cuda toolkit (run file installation case)
<https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#runfile-uninstallation>

# nvidia-container-toolkit install
- ERRO[0000] error waiting for container: context canceled
- https://github.com/NVIDIA/nvidia-docker/issues/1034
```bash
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
sudo apt-get update && sudo apt-get install -y nvidia-container-toolkit
sudo systemctl restart docker
```
