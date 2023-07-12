FROM node:16.19.1 as base_image
SHELL ["/bin/bash", "-c"]
RUN apt update -y && \
    apt upgrade -y && \
    yarn global add @angular/cli@latest -y && \
    ng config -g cli.packageManager yarn

FROM base_image as development
WORKDIR /app

ENTRYPOINT ["node", "index.js"]

EXPOSE 4000