# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]

# Build the Docker image
# docker build -t mock-yelp-api .
# -----------------------------------
# Run the Docker container
# docker run -p 3000:3000 mock-yelp-api
# -----------------------------------
# Stop the container    
# Find the container id: 
    # docker ps
# Stop the container:
    # docker stop <container_id>
# -----------------------------------
# http://localhost:3000/search
# http://localhost:3000/search?term=Pizza&location=London
