FROM node:12.14.1-slim AS build

RUN apt-get update && \
    apt-get -y install zip && \
    apt-get clean

COPY package.json package-lock.json src/

WORKDIR ./src

RUN npm ci --verbose

COPY . .

RUN npm run build

FROM build AS test

# build arg used to invalidate cache so tests will run
ARG TIMESTAMP

RUN npm run test

FROM test AS deploy

RUN cp -rp ./build/src/ ./dist && cp -rp ./node_modules ./dist && zip -r ./lambda.zip ./dist/*

FROM deploy

COPY --from=deploy /src/lambda.zip ./lambda.zip
