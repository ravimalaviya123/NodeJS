# Use an official Node.js LTS image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package files first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app files
COPY . .

# Expose port (change if your app uses a different one)
EXPOSE 3000

# Command to run the app
CMD ["node", "index.js"]
