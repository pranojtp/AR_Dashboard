# =========================
# Stage 1: Build
# =========================
FROM node:22 AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all source files
COPY . .

# Build Vite React app
RUN npm run build

# =========================
# Stage 2: Production
# =========================
FROM nginx:alpine AS production

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built app from builder (Vite outputs to dist)
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]