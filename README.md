# README - SeuInvestimento Backend

  

This is the backend of the SeuInvestimento project. It provides the server logic for the application and is configured to run using Docker Compose.

  

## Prerequisites

  

Before you begin, you'll need to have the following installed on your machine:

  

- Docker: [Docker Installation](https://docs.docker.com/get-docker/)

- Docker Compose: [Docker Compose Installation](https://docs.docker.com/compose/install/)

  

## Environment Setup

  

1. Clone this repository on your machine:
git clone https://github.com/YuriiSouza/seuinvestimento_backend.git

2. Navigate to the backend directory:

	```bash
	cd seuinvestimento_backend
	```

3. Create a `.env` file based on the provided `.env.example` template and configure the necessary environment variables such as `POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, etc.

	```bash
	cp .env.example .env
	```
4. Edit the `.env` file with the appropriate settings for your environment.

  

## Running the Backend

  

Once the environment is set up, you can start the backend using Docker Compose.

  

1. In the root directory of the project, run the following command:

  
	```bash
	docker-compose up --build
	```

	This command will build the necessary Docker images and start the containers.

2. After successful initialization, you'll see messages indicating that the backend is running. You can access it at `http://localhost:3000`.

  

## Stopping the Backend

  

To stop the backend execution, you can press `Ctrl + C` in the terminal where Docker Compose is running or execute the following command in the root directory of the project:
	
```bash
	docker-compose down
```
This will shut down the backend containers.

## Contributing

  

If you wish to contribute to this project, feel free to open an Issue or submit a Pull Request.