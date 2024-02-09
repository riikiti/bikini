FROM node:lts-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN  npm install --production --force && npm install cross-env

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM node:lts-alpine AS runner
WORKDIR /var/www/

ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "run", "start"]

