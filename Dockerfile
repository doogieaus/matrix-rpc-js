FROM node:11.15-alpine as builder
WORKDIR /build
COPY . .
RUN yarn install
RUN yarn build

FROM node:11.15-alpine
COPY --from=builder /build/node_modules/ ./node_modules
COPY --from=builder /build/app/ ./app
COPY --from=builder /build/package.json .
COPY --from=builder /build/proto ./proto
CMD ["node", "app/index.js"]
