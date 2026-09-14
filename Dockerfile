# Production Dockerfile for Next.js with shadcn/ui
ARG BASE_IMAGE=node:20-slim
FROM ${BASE_IMAGE} AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build
FROM ${BASE_IMAGE} AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/.next-build/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next-build/static ./.next-build/static
COPY --from=builder /app/public ./public
USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
