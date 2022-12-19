ARG NODE_VERSION=latest
FROM node:${NODE_VERSION}

ENV PROJ_WS=/react_app
ENV PROJ_NAME=ztggdemo
ENV REACT_APP_WS=${PROJ_WS}/${PROJ_NAME}
ENV DEMO_NAME=uidemo

WORKDIR ${PROJ_WS}

RUN node -v | tee -a start.log && \
    yarn -v | tee -a start.log

COPY ./deploy.sh ${PROJ_WS}/deploy.sh

EXPOSE 3000

ENTRYPOINT ["sh","deploy.sh"]
