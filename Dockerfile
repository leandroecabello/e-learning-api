# Use a Node.js image as the base
FROM node:18.17.1

# Set the working directory to the app folder
WORKDIR /usr/src/app

# Copy the application files to the container
COPY package*.json ./
COPY . .

# Install project dependencies
RUN npm install

# Expose the port on which the application runs
EXPOSE 3000

# Environment variables for MySQL connection (may differ in production)
ENV DB_HOST=${DB_HOST}
ENV DB_PORT=3306
ENV DB_USER=${DB_USERNAME}
ENV DB_PASSWORD=${DB_PASSWORD}
ENV DB_DATABASE=${DB_DATABASE}

# Command to build the NestJS application
RUN npm run build

# Command to start the application
CMD ["npm", "run", "start"]