FROM node:24-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"
RUN corepack enable

FROM base AS build
WORKDIR /workspace
# Utilize docker cached layer to only update `pnpm install` when deps have changed
COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./
COPY kafka-connection/package.json ./kafka-connection/package.json 
COPY literary-service/package.json ./literary-service/package.json 
COPY math-service/package.json ./math-service/package.json 
COPY rest-client/package.json ./rest-client/package.json
COPY tweet-service/package.json ./tweet-service/package.json
RUN pnpm install --frozen-lockfile
# Build the workspace
COPY . .
RUN pnpm run build

# RUN rm -r node_modules
# RUN pnpm install --frozen-lockfile --prod

FROM base
ARG SERVICE_NAME
WORKDIR /workspace
COPY --from=build /workspace/node_modules ./node_modules
COPY --from=build /workspace/kafka-connection/package.json ./kafka-connection/package.json
COPY --from=build /workspace/kafka-connection/dist ./kafka-connection/dist
COPY --from=build /workspace/$SERVICE_NAME/node_modules ./$SERVICE_NAME/node_modules
COPY --from=build /workspace/$SERVICE_NAME/dist ./$SERVICE_NAME/dist
WORKDIR /workspace/$SERVICE_NAME
ENV NODE_ENV=production
CMD [ "node", "dist/main.js" ]
