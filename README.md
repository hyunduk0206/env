# install
- graphic card driver
- browsers: chrome, brave
- vscode
- hwp
- slack
- discord
- nvm
- anaconda
- printer driver (optional)

# unpacking archive with Korean file names

```bash
unzip -O cp949 koreanFileNames.zip
```

# How do I add an executable to my search path?

1. Create a folder called bin in your home directory.

```bash
mkdir ~/bin
```

2. Add ~/bin to your PATH for all sessions of Bash (the default shell used inside of the terminal).

```bash
vim ~/.zshrc
```

```
export PATH="/home/$USER/bin:$PATH"
```

3. Add either the executable files themselves OR symlinks to the executable into ~/bin

```bash
source ~/.zshrc
```

# share
- https://garrulous-piano-1c5.notion.site/1474b2bcebe84e1dbbabbfb9db64cbf2?v=8ae78953a0254028b84e374fa3c177b4
- https://drive.google.com/drive/folders/1prfdFZLUfXytfgT-2kmq6n-SIiIwToGr?usp=sharing

