# vb-github

VietBible Github Integration

## How to dev

```
# Start webpack build server
yarn watch:webpack

# Open new terminal and run:
docker-compose up
```

## How to deploy

1. Add remote Dokku server
2. Setup app on server:

* Create app
* Set config env
* Mount /dir:/repos

3. Push master branch
