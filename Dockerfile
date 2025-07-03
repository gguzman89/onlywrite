
# Dependencias de desarrollo
FROM node:lts-alpine3.20 AS deps
WORKDIR /app
COPY package.json package.json
RUN npm install


# Build
FROM node:lts-alpine3.20 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build


# dependencias de produccion
# FROM node:lts-alpine3.20 AS prod-deps
# WORKDIR /app
# COPY package.json package.json
# RUN npm install --prod


# ejecutar la app
FROM node:lts-alpine3.20 AS runner
EXPOSE 3055
WORKDIR /app
# COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY .env .env
# COPY package.json package.json
COPY . .
RUN mkdir -p /home/storage

# CMD [ "node", "dist/app.js" ]
CMD [ "npm", "start" ]








# COPY package.json package-lock.json ./
# COPY .env .env

# RUN npm install

# COPY . .

# EXPOSE 3055

# CMD ["npm", "start"]