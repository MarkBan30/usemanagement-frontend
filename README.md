# How to use

## Prepare local environment [Ref](https://itsromiljain.medium.com/the-best-way-to-install-node-js-npm-and-yarn-on-mac-osx-4d8a8544987a)
1. Install nvm to install and switch node
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm -v # To verify nvm installation
```

2. Install node with nvm and switch to installed version
```bash
nvm install xxxxxxx/--lts # To install a specific version of node --lts=latest
nvm ls # List all installed node
nvm use xxxxxxxx # Switch to use a specific version of node
node -v # To verify the node version
npm install -g npm@latest # Upgrade npm to latest version
npm -v # To verify the npm version, installed with node installation
```

3. Install yarn or use npm directly
```bash
npm install -g yarn
yarn -v # To verify yarn version
```
## Initialize React project and get start [Ref](https://create-react-app.dev/docs/getting-started/)
1. Init with yarn
```bash
yarn create react-app uidemo
yarn start
```
2. Init with npm directly
```bash
npm init react-app uidemo
```

## Start this project using
1. Install dependencies(install all dependencies in package.json)
```bash
yarn install
```
2. Start ui demo in development mode
```bash
yarn start
```