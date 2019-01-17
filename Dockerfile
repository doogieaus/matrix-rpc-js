FROM node:11.6.0-alpine as builder
COPY . .
RUN apk add --no-cache --virtual .gyp python make g++
RUN yarn install && yarn build

FROM node:11.6.0-alpine as app
COPY --from=builder node_modules .
COPY --from=builder app .
COPY --from=builder package.json .
USER node
CMD ["yarn", "start"]
