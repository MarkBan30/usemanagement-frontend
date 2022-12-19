#!bin/bash

DATE_TS=$(date +%Y%m%d%H%M%S)
START_LOG_FILE="${PROJ_WS}/start.log"

cd $PROJ_WS

git --version | tee -a $START_LOG_FILE
git clone https://samuel_yang0129%40msn.com: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@github.com/SamuelYang0129/$PROJ_NAME.git
cd $REACT_APP_WS
git fetch --all
git checkout -b $DEMO_NAME origin/$DEMO_NAME

yarn config set "strict-ssl" false -g
yarn config set network-timeout 600000 -g

yarn install | tee -a $START_LOG_FILE
yarn start | tee -a $START_LOG_FILE
