# ---------- Stage 1: Build ----------

FROM node:20 AS builder

WORKDIR /app

# Copy dependency files

COPY package.json package-lock.json* ./

# Install dependencies

RUN npm install --legacy-peer-deps

# Copy project files

COPY . .

# Build Next.js application

RUN npm run build

# ---------- Stage 2: Production ----------

FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

# Copy built files from builder stage

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./

EXPOSE 3000

CMD ["npm","start"]
