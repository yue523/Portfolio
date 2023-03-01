# Node.js Application with Docker

This is a sample Node.js application built with Docker.

## Requirements

- Docker
- Docker Compose

## Usage

1. Clone this repository:

   ```sh
   $ git clone https://github.com/example/node-docker-app.git
   $ cd node-docker-app
   ```

2. Build and start the Docker containers:

   ```sh
   $ docker-compose up --build
   ```

3. Access the application at http://localhost:3000.

## Configuration
The following environment variables can be used to configure the application:

- NODE_ENV: The Node.js environment (development or production). Defaults to development.
- APP_PORT: The port on which the application listens. Defaults to 3000.

These environment variables can be set in the docker-compose.yml file, or in a separate .env file.

## Version
1.0.0

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Author
Yuki Kato

Email: yuki@higlab.net  
Github: @yue523

## Contact
If you have any questions or comments about this project, please contact us at yuki@higlab.net.

