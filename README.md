# MongoDB connection via mongodb package
Express server that connects to a MongoDB database via the mongodb driver.

## Setup
- Clone the repository.
    ```
    git clone https://github.com/shanosha/mod-13-lab-1.git
    ```
- Navigate to the directory.
    ```
    cd mod-13-lab-1
    ```
- Install the node packages.
    ```
    npm install
    ```
- Setup your database connection credentials and port in a .env file in the root directory of the project.
    ```
    MONGO_URI = YOUR_DATABASE_CONNECTION_URL_HERE
    PORT = 3001
    ```  
- Run the Express server using nodemon.

    ```
    npm run dev
    ```
- Open the server URL in a browser.
- The server response will include a JSON message informing you of whether of not the database connection was successful.

## Testing the Database Connection on the Server

Use a tool like Postman or by visiting the server URL in your browser. Here is the endpoint to test: "/"

## Reflections
- Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing connections from anywhere (0.0.0.0/0)?
  - It's important to whitelist IP addresses to nesure that known, trusted sources can connect to your dtabase. The risks of allowing a connection from anywhere include unauthorized access and malicious attacks on your database.
- What is the purpose of the dotenv package? What other methods could you use to manage environment variables in a production environment (e.g., in a cloud hosting service)?
  - The purpose of the dotenv package is to allow you to setup environment variables in a .env file, like database connection credentials and API keys, and access those variables securely in your project from a process.env global object. It keeps configuration seperate from application code. In cloud hosting you can configure environment variables on the server that are ecrypted and injected into the application at runtime.
- If your application failed to connect, what are the first few steps you would take to debug the issue?
  - I would check the error message first. Then, I would validate the credentials and the connection string, and that the process.env is referencing the correct variable. After that, I would check that the IP address is whitelisted.