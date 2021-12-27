# Doc
https://docs.aws.amazon.com/index.html

# free instances
## create
```bash
aws ec2 run-instances --image-id ami-0eb14fe5735c13eb5 --instance-type t2.micro --key-name <key pairs>
```

# Mis
```bash
aws sts get-caller-identity --profile <profile_name>
aws configure list --profile <profile_name>
```

# install
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

# configure
```bash
aws configure --profile <profile_name>
```

# setting dir
```bash
cd ~/.aws
```
