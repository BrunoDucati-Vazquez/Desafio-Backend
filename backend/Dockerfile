# Use the official Node.js image.
FROM node:14

# Set the working directory in the container.
WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Expose the application port (assuming your app runs on port 3000)
EXPOSE 3000

# Command to run your application
CMD ["npm", "run", "dev"]