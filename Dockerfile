# Use the official Node.js image as the base image
FROM node:12

# Install the application dependencies
RUN npm install

# Define the entry point for the container
CMD ["npm", "start"]
