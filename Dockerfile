# Use Node.js LTS version as a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 for the Next.js dev server
EXPOSE 3000

# Default command to run when starting the container
CMD ["npm", "run", "dev"]
